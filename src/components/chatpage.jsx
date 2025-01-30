import ChatContainer from "./chatContainer";
import ChatHeader from "./chatHeader";
import ChatSend from "./chatSend";

const ChatPage = () => {
  return <>
    <div className="min-h-svh max-h-[100vh] overflow-hidden flex flex-col justify-between bg-gray-900">
      <ChatHeader />
      <ChatContainer />
    </div>
  </>
}

export default ChatPage;