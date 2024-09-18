import { useState } from "react";
import { useMeeting } from "@videosdk.live/react-sdk";
import { Controlls } from "../Controlls";
import { ParticipantView } from "../ParticipantView";

export const MeetingView = ({
  onMeetingLeave,
  meetingId,
}: {
  onMeetingLeave: () => void;
  meetingId: string;
}) => {
  const [joined, setJoined] = useState<string | null>(null);

  const { join, participants } = useMeeting({
    onMeetingJoined: () => setJoined("JOINED"),
    onMeetingLeft: () => onMeetingLeave(),
  });
  console.log("particepents", participants);
  const joinMeeting = () => {
    if (!participants) return;
    setJoined("JOINING");
    join();
  };

  return (
    <div>
      <h3> MeetingId : {meetingId}</h3>
      {joined && joined === "JOINED" ? (
        <div>
          {[...participants.keys()].map((partId) => (
            <div
              style={{
                width: "600px",
                borderStyle: "-moz-initial",
                borderWidth: "1px",
                borderRadius: "5px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column",
              }}
            >
              <Controlls />

              <ParticipantView participantId={partId} key={partId} />
            </div>
          ))}
        </div>
      ) : joined && joined === "JOINING" ? (
        <div>
          <p>Joinig the meeting</p>
        </div>
      ) : (
        <button onClick={joinMeeting}>Join</button>
      )}
    </div>
  );
};
