import { useState } from "react";

export const Join = ({
  getMeetingAndToken,
}: {
  getMeetingAndToken: (id?: string) => void;
}) => {
  const [meetingId, setMeetingId] = useState<string | undefined>();

  const handleClick = async () => {
    getMeetingAndToken(meetingId);
  };
  const handleChange = (e: any) => {
    setMeetingId(e.target.value);
  };
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
      }}
    >
      <input
        // style={{ backgroundColor: "#000000", color: "#fffffff" }}
        type="text"
        placeholder="Enter meting Id"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Join</button>
      {"or"}
      <button onClick={handleClick}>Create Meeting</button>
    </div>
  );
};
