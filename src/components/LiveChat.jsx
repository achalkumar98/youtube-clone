import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, [dispatch]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  return (
    <div className="flex flex-col h-[600px] w-full bg-white border border-gray-200 rounded-xl shadow-sm">
      {/* Header */}
      <div className="px-4 py-2 bg-gray-100 border-b border-gray-200 rounded-t-xl font-semibold text-gray-800">
        Top Chat
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        <div ref={messagesEndRef} /> {/* Marker for scroll-to-bottom */}
      </div>

      {/* Input Box */}
      <form
        className="p-3 border-t border-gray-200 flex items-center space-x-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;
          dispatch(
            addMessage({
              name: "Achal Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          placeholder="Say something..."
          className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
