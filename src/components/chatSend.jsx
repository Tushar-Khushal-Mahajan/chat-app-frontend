
import sendIcon from "../assets/send-icon.png";

const ChatSend = () => {
  return <div className="bg-gray-700 md:px-20 px-3 py-3 flex justify-around gap-3">
    <input type="text" id="message" name="message" placeholder="Type a messag"
      className="w-full border bg-gray-900 text-white border-gray-400 p-2"
    />

    <button><img src={sendIcon} className="max-h-9" /></button>
  </div>
}

export default ChatSend;