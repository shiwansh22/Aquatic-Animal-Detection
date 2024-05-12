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

        # detect objects
        # track objects
        results = model.track(frame, persist=True)

        # plot results
        # cv2.rectangle
        # cv2.putText
        frame_ = results[0].plot()

        # visualize
        cv2.imshow('frame', frame_)
        if cv2.waitKey(1) & 0xFF == ord(' '):
            break

# import cv2

# # Create a VideoCapture object to read from the webcam
# cap = cv2.VideoCapture(0)

# # Create a tracker object
# tracker = cv2.TrackerCSRT_create()

# # Read the first frame from the webcam
# ret, frame = cap.read()

# # Select a region of interest (ROI) to track
# roi = cv2.selectROI(frame, False)

# # Initialize the tracker with the ROI
# tracker.init(frame, roi)

# # Loop over frames from the webcam
# while True:
#     # Read a new frame from the webcam
#     ret, frame = cap.read()

#     # Update the tracker
#     success, roi = tracker.update(frame)

#     # If tracking is successful, draw a bounding box around the object
#     if success:
#         (x, y, w, h) = tuple(map(int, roi))
#         cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
#     else:
#         # If tracking is unsuccessful (object lost), you can handle it here
#         cv2.putText(frame, "Object Lost", (100,80), cv2.FONT_HERSHEY_SIMPLEX, 0.75,(0,0,255),2)

#     # Display the frame
#     cv2.imshow("Object Tracking", frame)

#     # Exit the loop if the 'q' key is pressed
#     if cv2.waitKey(1) & 0xFF == ord('q'):
#         break

# # Release the VideoCapture object and close all windows
# cap.release()
# cv2.destroyAllWindows()
