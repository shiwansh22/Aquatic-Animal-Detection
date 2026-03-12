from ultralytics import YOLO
import cv2
import os
import tempfile

# Load model ONCE (very important)
MODEL_PATH = "../ml-core/best.pt"
model = YOLO(MODEL_PATH)

def run_inference(file_bytes: bytes, filename: str):
    # Save uploaded file temporarily
    suffix = os.path.splitext(filename)[1]

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(file_bytes)
        temp_path = tmp.name

    # Run YOLO inference
    results = model(temp_path)

    detections = []

    for r in results:
        for box in r.boxes:
            detections.append({
                "class": model.names[int(box.cls)],
                "confidence": float(box.conf)
            })

    return detections
