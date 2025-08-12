import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start space-x-2">
      <FaUserCircle className="text-gray-500 w-6 h-6 flex-shrink-0" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-800">{name}</span>
        <span className="text-sm text-gray-700">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
