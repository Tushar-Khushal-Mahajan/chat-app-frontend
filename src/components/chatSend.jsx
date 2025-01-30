
import { useRef } from "react";
import sendIcon from "../assets/send-icon.png";

const ChatSend = ({ callBack }) => {

  let message = useRef("");

  return <form onSubmit={(e) => { e.preventDefault(); }}>
    <div className="bg-gray-700 md:px-20 px-3 py-3 flex justify-around gap-3">
      <input type="text" id="message" name="message" placeholder="Type a messag" ref={message}
        className="w-full border bg-gray-900 text-white border-gray-400 p-2"
      />

      <button onClick={() => { callBack(message.current.value); message.current.value = ""; }}><img src={sendIcon} className="max-h-9" /></button>
    </div>
  </form>
}

export default ChatSend;