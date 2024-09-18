export const authToken: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3Njc0YTgxMS00NGMyLTQ2ZTctOTU4OS04MTRiZWNhNGU0NDgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNjY0MDc4MiwiZXhwIjoxNzI3MjQ1NTgyfQ.kVCpeXlcj-ZHR_Tv_WAG5K5p0CtIxy6rTY-0Mu3Ejrw";

export const createMeeting = async ({ token }: { token: string }) => {
  const response = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const result = await response.json();
  const { roomId } = result;
  return roomId;
};
