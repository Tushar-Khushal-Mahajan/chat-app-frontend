import toast from "react-hot-toast";
import { httpClient } from "./httpClient"

export const createRoom = async (roomId) => {


  try {
    console.log("in cerate room: ", roomId);
    const response = await httpClient.post("/api/v1/rooms", roomId, {
      headers: {
        "Content-Type": "text/plain ",
      }
    });

    console.log("Response from create room: ", response.data);

    return response.data;
  }
  catch (error) {
    console.error(error);

    toast.error("Room already exists..");
  }

}