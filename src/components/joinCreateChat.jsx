// import './App.css'

import { useState } from "react";
import { useRef } from "react"
import toast from "react-hot-toast";
import { createRoom, joinRoom } from "../services/roomService";
import { useChatContext } from "../context/chatContext";
import { useNavigate } from "react-router";


function JoinCreateChat() {

  const nameField = useRef("");
  const roomIdField = useRef("");

  const { roomId, setRoomId, currentUser, setCurrentUser, connected, setConnected } = useChatContext();
  const navigate = useNavigate();

  function validateInput(name, roomId) {
    if (name.trim() == "" || roomId.trim() == "") {
      toast.error("Name and roomID is required");
      return false;
    } else {
      return true;
    }
  }

  async function createRoomHandler() {
    if (validateInput(nameField.current.value, roomIdField.current.value)) {

      try {
        let response = await createRoom(roomIdField.current.value);

        console.log(response);

        toast.success("Room created successfully..");

        setCurrentUser(nameField.current.value);
        setRoomId(roomIdField.current.value);
        setConnected(true);

        // forward to chat page
        navigate("/chat");

      } catch (error) {
        toast.error("Room already exists");
        console.error(error);
      }
    }
  }

  async function joinRoomHandler() {
    if (validateInput(nameField.current.value, roomIdField.current.value)) {
      console.log("name : " + nameField.current.value);
      console.log("roomID : " + roomIdField.current.value);

      try {

        let response = await joinRoom(roomIdField.current.value);

        console.log("Room details :", response);
        toast.success("Room Join");

        setCurrentUser(nameField.current.value);
        setRoomId(roomIdField.current.value);
        setConnected(true);

        // forward to chat page
        navigate("/chat");

      } catch (error) {
        toast.error("No room found");
        console.error(error);
      }
    }
  }

  return <div className='min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center'>
    <section className='bg-gray-900 p-8 w-full max-w-md border border-gray-800 shadow flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold text-center'>Create / Join Room</h1>

      <div className='text-lg'>
        <label htmlFor="NAME" className='block'>Your Name</label>
        <input type="text" name="name" ref={nameField} id="NAME" placeholder='Enter your name' className='mt-1 border-2 border-gray-600 rounded-full px-2 w-full bg-gray-800' />
      </div>

      <div className='text-lg'>
        <label htmlFor="ROOOM_ID" className='block'>Room Id</label>
        <input type="text" name="rommId" ref={roomIdField} id="ROOOM_ID" placeholder='Enter Room ID' className='mt-1 border-2 border-gray-600 rounded-full px-2 w-full bg-gray-800' />
      </div>

      <div className='mt-1 flex justify-end text-gray-950 font-semibold'>
        <button className='bg-orange-500 px-3 py-1.5 rounded-full hover:bg-orange-600' onClick={joinRoomHandler}>
          Join Room
        </button>
        <button className='ms-3 bg-blue-500 px-3 py-1.5 rounded-full hover:bg-blue-600' onClick={createRoomHandler}>
          Create Room
        </button>
      </div>
    </section>
  </div>
}

export default JoinCreateChat
