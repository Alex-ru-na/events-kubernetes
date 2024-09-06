import axios from "axios";

export const getChatsService = async (userId, skip, limit) => {
  const BASE_URL = "http://servicek8s:30001/";
  try {
    const response = await axios.get(BASE_URL + "chats/");
    return response.data || [];
  } catch (error) {
    return [];
  }
};
