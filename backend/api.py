from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd

app = FastAPI()

# 🔥 ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    df = pd.read_csv(file.file)

    results = [
        {
            "id": int(i),
            "amount": float(row.get("Amount", 0)),
            "prediction": int(i % 2),  # mock
        }
        for i, row in df.iterrows()
    ]

    return JSONResponse(content=results)
