import { useRef, useMemo, useEffect } from "react";
import {
  MeetingConsumer,
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";

export const ParticipantView = ({
  participantId,
}: {
  participantId: string;
}) => {
  const webcamRef = useRef<HTMLVideoElement>(null);
  const micRef = useRef<HTMLAudioElement>(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current.play().catch((error) => {
          console.error("videoELemenent.current.play() failed", error);
        });
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micOn, micStream]);

  return (
    <div key={participantId}>
      <p>
        Participant : {displayName} | Webcam : {webcamOn ? "ON" : "OFF"} | Mic:
        {micOn ? "ON" : "OFF"}
      </p>
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height="300px"
          width="400px"
          onError={(err) => {
            console.error("Participant error", err);
          }}
        />
      )}
    </div>
  );
};
