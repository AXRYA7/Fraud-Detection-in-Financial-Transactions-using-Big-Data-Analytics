from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler, StandardScaler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import (
    BinaryClassificationEvaluator,
    MulticlassClassificationEvaluator
)

def main():
    # Create Spark session
    spark = SparkSession.builder \
        .appName("FraudDetectionBigData") \
        .getOrCreate()

    # Load dataset
    df = spark.read.csv(
        "../data/creditcard.csv",
        header=True,
        inferSchema=True
    )

    # Select feature columns (exclude label)
    feature_cols = [c for c in df.columns if c != "Class"]

    # Assemble features into vector
    assembler = VectorAssembler(
        inputCols=feature_cols,
        outputCol="features_raw"
    )
    df_vec = assembler.transform(df)

    # Scale features
    scaler = StandardScaler(
        inputCol="features_raw",
        outputCol="features",
        withMean=True,
        withStd=True
    )
    scaler_model = scaler.fit(df_vec)
    df_final = scaler_model.transform(df_vec)

    # Train-test split
    train_df, test_df = df_final.randomSplit([0.8, 0.2], seed=42)

    # Logistic Regression model
    lr = LogisticRegression(
        featuresCol="features",
        labelCol="Class",
        maxIter=10
    )
    model = lr.fit(train_df)

    # Predictions
    predictions = model.transform(test_df)

    # AUC evaluation
    auc_evaluator = BinaryClassificationEvaluator(
        labelCol="Class",
        metricName="areaUnderROC"
    )
    auc = auc_evaluator.evaluate(predictions)
    print(f"AUC Score: {auc}")

    # Precision (Fraud class = 1)
    precision_evaluator = MulticlassClassificationEvaluator(
        labelCol="Class",
        predictionCol="prediction",
        metricName="precisionByLabel"
    )
    precision = precision_evaluator.evaluate(
        predictions,
        {precision_evaluator.metricLabel: 1.0}
    )

    # Recall (Fraud class = 1)
    recall_evaluator = MulticlassClassificationEvaluator(
        labelCol="Class",
        predictionCol="prediction",
        metricName="recallByLabel"
    )
    recall = recall_evaluator.evaluate(
        predictions,
        {recall_evaluator.metricLabel: 1.0}
    )

    print(f"Precision: {precision}")
    print(f"Recall: {recall}")

    spark.stop()

if __name__ == "__main__":
    main()
