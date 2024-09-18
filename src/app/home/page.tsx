"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  MeetingConsumer,
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../API";
import ReactPlayer from "react-player";
import { Join } from "../components/Join";
import { MeetingView } from "../components/MeetingView";

export default function Home() {
  const [meetingId, setMeetingId] = useState<string | null>(null);

  const joinScreen = ({
    getMeetingAndToken,
  }: {
    getMeetingAndToken: string;
  }) => {
    return null;
  };

  const participantView = ({ participantId }: { participantId: string }) => {
    return null;
  };

  const joinMeeting = ({
    onMeetingLeave,
    meetingId,
  }: {
    onMeetingLeave: () => void;
    meetingId: string;
  }) => {
    return null;
  };

  const controls = () => {
    return null;
  };

  const getMeetingAndToken = async (id?: string) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "100vh",
          backgroundSize: "cover",
          // backgroundColor: "#ffffff",
        }}
      >
        {authToken && meetingId ? (
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: true,
              webcamEnabled: true,
              name: "Ajith kumar",
              debugMode: false,
            }}
            token={authToken}
          >
            <MeetingView
              meetingId={meetingId}
              onMeetingLeave={onMeetingLeave}
            />
          </MeetingProvider>
        ) : (
          <Join getMeetingAndToken={getMeetingAndToken} />
        )}
      </div>
      <div
        style={{
          width: "30%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundColor: "#ffffff",
        }}
      >
        <h1 style={{ color: "#000000" }}>Sentimental analysis</h1>
      </div>
    </div>
  );
}
