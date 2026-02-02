from pyspark.sql import SparkSession

def main():
    spark = SparkSession.builder \
        .appName("FraudDetectionBigData") \
        .getOrCreate()

    
    df = spark.read.csv(
        "data/creditcard.csv",
        header=True,
        inferSchema=True
    )

    # Basic checks
    df.printSchema()
    df.show(5)

    # Class distribution (fraud vs non-fraud)
    df.groupBy("Class").count().show()

    spark.stop()

if __name__ == "__main__":
    main()
