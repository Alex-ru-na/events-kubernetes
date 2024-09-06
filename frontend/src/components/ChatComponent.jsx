import { useEffect, useState } from "react";
import { getChatsService } from "../services/chats";

export default function ChatComponent() {
  const [chats, setChats] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await getChatsService();
        setChats(result);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <div className="w-full max-w-sm bg-white divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700 flex flex-col h-screen">
        <div className="px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
          Chats
        </div>
        <div className="divide-gray-100 dark:divide-gray-700 flex-grow overflow-y-auto">
          {chats.map((item, index) => (<ChatItemComponent key={index} chat={item} />))}
        </div>
      </div>
    </main>
  );
}

function ChatItemComponent({ chat }) {
  return (
    <a
      href={"user/" + chat.user.id}
      className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <div className="flex-shrink-0">
        <img
          className="rounded-full w-11 h-11"
          src={chat.user.icon}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <div className="w-full ps-3">
        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
          New message from{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {chat.user.nickname}
          </span>
          : {chat.lastMessage.text}
        </div>
        <div className="text-xs text-blue-600 dark:text-blue-500">
          1 hour ago
        </div>
      </div>
    </a>
  );
}
