import ChatSend from "./chatSend";

const ChatContainer = () => {

  return <>
    <div className="min-w-screen flex justify-center overflow-y-scroll flex-1">
      <div className="md:min-w-3xl md:text-xl sm:text-xs md:max-w-3xl min-w-full border border-gray-500 p-3 bg-gray-600 text-white flex flex-1 flex-col gap-2 overflow-y-scroll ">
        <div className="w-full">
          <section className="p-2 pb-3 bg-white text-black w-fit max-w-5/6 md:max-w-4/6 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl relative   ">
            <small className="text-xs text-orange-900">Tushar Mahajan</small><br />
            <span>Hii</span><br />
            <small className="text-xs text-gray-400 p-0 m-0 absolute right-1 bottom-0">03:27 pm</small>
          </section>
        </div>
        <div className="w-full">
          <section className="p-2 pb-3 bg-[#D9FDD3] text-black w-fit max-w-5/6 md:max-w-4/6 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl float-right relative ">
            <small className="text-xs text-orange-900">Tushar Mahajan</small><br />
            <span>Hii</span><br />
            <small className="text-xs text-gray-400 p-0 m-0 absolute right-1 bottom-0">03:27 pm</small>
          </section>
        </div>
        <div className="w-full">
          <section className="p-2 pb-3 bg-[#D9FDD3] text-black w-fit max-w-5/6 md:max-w-4/6 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl float-right relative ">
            <small className="text-xs text-orange-900">Tushar Mahajan</small><br />
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, saepe ex quo totam minus ipsa veniam, commodi ratione laborum blanditiis id tempore fuga tempora eligendi fugiat. Nulla repellat architecto perspiciatis.</span><br />
            <small className="text-xs text-gray-400 p-0 m-0 absolute right-1 bottom-0">03:27 pm</small>
          </section>
        </div>
        <div className="w-full">
          <section className="p-2 pb-3 bg-white text-black w-fit max-w-5/6 md:max-w-4/6 rounded-bl-2xl rounded-br-2xl rounded-tl-2xl relative   ">
            <small className="text-xs text-orange-900">Tushar Mahajan</small><br />
            <span>Lorem ipsum dolor</span><br />
            <small className="text-xs text-gray-400 p-0 m-0 absolute right-1 bottom-0">03:27 pm</small>
          </section>
        </div>
      </div>
    </div>

  </>;
}

export default ChatContainer;