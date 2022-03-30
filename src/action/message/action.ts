import axios from "axios";
import Message from "../../@types/message";

const api_url = "http://localhost:3000/";

export function getMessages(callback: (data: Message[]) => void) {
  axios
    .get(api_url + "message")
    .then(({ data }) => {
      callback(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

export function addMessage(message: Message, callback: () => void) {
  axios
    .post(api_url + "message", message)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function editMessages(
  message: Message,
  messageId: any,
  callback: () => void
) {
  axios
    .put(api_url + "message/" + messageId, message)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}

export function deleteMessages(message: Message, callback: () => void) {
  axios
    .delete(api_url + "message/" + message._id)
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.error(e);
    });
}
