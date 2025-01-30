import { useEffect, useState } from "react";
import ChatSend from "./chatSend";
import { useChatContext } from "../context/chatContext";
import { useNavigate } from "react-router";


const ChatContainer = () => {

  const [messages, setMessage] = useState([
    {
      content: "hii",
      sender: "Tushar"
    },
    {
      content: "Hello",
      sender: "Tushar"
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa inventore quibusdam illo fuga ullam laboriosam nemo, aut praesentium voluptatibus, hic recusandae et earum voluptate nihil, consequuntur eveniet quidem mollitia!",
      sender: "Tushar"
    },
    {
      content: "hii",
      sender: "Bhuvan"
    },
    {
      content: "h",
      sender: "Tushar"
    }
  ]);
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
  </>;
}

export default ChatContainer;