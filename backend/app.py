from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from inference import run_inference

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "backend running"}

@app.post("/detect")
async def detect(file: UploadFile = File(...)):
    file_bytes = await file.read()

    detections = run_inference(file_bytes, file.filename)

    return {
        "detections": detections
    }
