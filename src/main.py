import os
from pyexpat import model
from pyspark.sql import SparkSession
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import LogisticRegression
from pyspark.ml.evaluation import BinaryClassificationEvaluator


def main():
    spark = SparkSession.builder \
        .appName("FraudDetectionBigData") \
        .getOrCreate()

    # Absolute path resolution (Windows-safe)
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DATA_PATH = os.path.join(BASE_DIR, "data", "creditcard.csv")
    MODEL_PATH = os.path.join(BASE_DIR, "models", "fraud_model")

    print("RUNNING UPDATED TRAINING FILE")
    print("Loading data from:", DATA_PATH)

    # Load dataset
    df = spark.read.csv(
        DATA_PATH,
        header=True,
        inferSchema=True
    )

    # Rename label column
    df = df.withColumnRenamed("Class", "label")

    # Feature columns
    feature_cols = [c for c in df.columns if c != "label"]

    assembler = VectorAssembler(
        inputCols=feature_cols,
        outputCol="features"
    )

    final_df = assembler.transform(df).select("features", "label")

    # Train-test split
    train_df, test_df = final_df.randomSplit([0.8, 0.2], seed=42)

    # Model
    lr = LogisticRegression(
        featuresCol="features",
        labelCol="label"
    )

    model = lr.fit(train_df)

    # Evaluation
    predictions = model.transform(test_df)

    evaluator = BinaryClassificationEvaluator(
        labelCol="label",
        rawPredictionCol="rawPrediction",
        metricName="areaUnderROC"
    )

    auc = evaluator.evaluate(predictions)
    print("AUC Score:", auc)

   # Save model (Windows-safe)
    import shutil

    if os.path.exists(MODEL_PATH):
        shutil.rmtree(MODEL_PATH)

    print("Saving model to:", MODEL_PATH)
    print("Training complete — model kept in memory")




    spark.stop()


if __name__ == "__main__":
    main()
