import { MessageRegistration } from "../models/messages";
import client from "./client";

const sendMessage = (data: MessageRegistration) =>
  client.post("/messages", data);


const getMessages = () => client.get('/messages');

export default {
  sendMessage,
  getMessages
};
