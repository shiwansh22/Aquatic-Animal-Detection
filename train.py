from ultralytics import YOLO
import cv2


# load yolov8 model
model = YOLO('best.pt')          

# load video
video_path = 'sea1.mp4'
cap = cv2.VideoCapture(video_path)

ret = True
# read frames
while ret:
    ret, frame = cap.read()

    if ret:
        results = model.track(frame, persist=True)
        frame_ = results[0].plot()
        # visualize
        cv2.imshow('frame', frame_)
        if cv2.waitKey(1) & 0xFF == ord(' '):
            break
