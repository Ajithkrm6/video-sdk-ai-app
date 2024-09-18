import { useMeeting } from "@videosdk.live/react-sdk";
export const Controlls = () => {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <button onClick={() => leave()}>Leave</button>
      <button onClick={() => toggleMic()}>Toggle Mic</button>
      <button onClick={() => toggleWebcam()}>Toggle Webcam</button>
    </div>
  );
};
