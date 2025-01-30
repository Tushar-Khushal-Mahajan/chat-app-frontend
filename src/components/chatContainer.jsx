import { useEffect, useState } from "react";
import ChatSend from "./chatSend";
import { useChatContext } from "../context/chatContext";
import { useNavigate } from "react-router";
import SockJS from "sockjs-client";
import { BASE_URL } from "../services/httpClient";
import { Stomp } from "@stomp/stompjs";
import toast from "react-hot-toast";


const ChatContainer = () => {

  const [messages, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = (null);
  const chatBoxRef = (null);
  const [stompClient, setStompClient] = useState(null);
  const { roomId, currentUser, connected } = useChatContext();

  const navigator = useNavigate();

  useEffect(() => {
    if (!connected) {
      navigator("/");
    }
  }, [roomId, currentUser, connected]);


  // load messages on page load
  useEffect(() => {

    const websocketConnect = () => {
      const sock = new SockJS(`${BASE_URL}/chat`);

      const client = Stomp.over(sock)

      client.connect({}, () => {
        setStompClient(client);
        toast.success("Connected");
        client.subscribe(`/topic/room/${roomId}`, (message) => {
          console.log(message);
          const newMessage = JSON.parse(message.body);
          console.error("Messages :- ", messages);
          setMessage((prevMessages) => [...prevMessages, newMessage]);

          console.error("Messages :- ", messages);
        });
      });
    }

    websocketConnect();

  }, [roomId]);

  function chatSend(message) {
    if (connected && stompClient && message.trim() != "") {
      const messageObj = {
        content: message.trim(),
        sender: currentUser,
        roomId: roomId
      }

      stompClient.send(`/app/sendMessage/${roomId}`, {}, JSON.stringify(messageObj));
    }
  }

  return <>
    <div className="min-w-screen flex justify-center overflow-y-scroll flex-1">
      <div className="md:min-w-3xl md:text-xl sm:text-xs md:max-w-3xl min-w-full border border-gray-500 p-3 bg-gray-600 text-white flex flex-1 flex-col gap-2 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index} className="w-full">
            <section
              className={`p-2 pb-3 
            ${(message.sender === currentUser) ? 'bg-[#D9FDD3] text-black float-right' : 'bg-white text-black'} 
            min-w-[8rem] max-w-5/6 md:max-w-4/6 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl relative inline-block`}
            >
              <small className="text-xs text-orange-900">{message.sender}</small><br />
              <span className="text-[0.8em]">{message.content}</span><br />
              <small className="text-xs text-gray-400 p-0 m-0 absolute right-1 bottom-0">03:27 pm</small>
            </section>
          </div>
        ))}
      </div>
    </div>


    <ChatSend callBack={chatSend} />
  </>;
}

export default ChatContainer;