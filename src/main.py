from pyspark.sql import SparkSession
from pyspark.sql.functions import col
from pyspark.ml.feature import VectorAssembler, StandardScaler

def main():
    spark = SparkSession.builder \
        .appName("FraudDetectionBigData") \
        .getOrCreate()

    df = spark.read.csv("data/creditcard.csv", header=True, inferSchema=True)

    # Separate features and label
    feature_cols = [c for c in df.columns if c != "Class"]

    assembler = VectorAssembler(
        inputCols=feature_cols,
        outputCol="features_raw"
    )

    df_vec = assembler.transform(df)

    scaler = StandardScaler(
        inputCol="features_raw",
        outputCol="features",
        withMean=True,
        withStd=True
    )

    scaler_model = scaler.fit(df_vec)
    df_final = scaler_model.transform(df_vec)

    df_final.select("features", "Class").show(5)

    spark.stop()

if __name__ == "__main__":
    main()
