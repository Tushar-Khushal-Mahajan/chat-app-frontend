import { httpClient } from "./httpClient"

export const createRoom = async (roomId) => {

  console.log("in cerate room: ", roomId);
  const response = await httpClient.post("/api/v1/rooms", roomId, {
    headers: {
      "Content-Type": "text/plain ",
    }
  });

  // console.log("Response from create room: ", response.data);
  return response.data;

}


export const joinRoom = async (roomId) => {

  const response = await httpClient.get(`/api/v1/rooms/${roomId}`, {
    headers: {
      "Content-Type": "text/plain",
    }
  });

  return response.data;

}

export const getMessagesByRoomId = async (roomId) => {
  const response = httpClient.get(`/api/v1/rooms/${roomId}/messages`, {
    headers: {
      "Content-Type": "text/plain",
    }
  });

  return response;
}