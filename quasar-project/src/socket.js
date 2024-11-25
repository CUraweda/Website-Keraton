import io from "socket.io-client";

const socket = io(
  // "https://api-prmn.curaweda.com:3031", //Production
  "https://api-prmn.curaweda.com:3040", //Production
  // "http://localhost:3000", //Development
  {
    transports: ["websocket"],
  }
);

export default {
  connect() {
    return new Promise((resolve, reject) => {
      socket.on("connect", () => {
        console.log("Connected to WS");
        resolve();
      });

      socket.on("connect_error", (error) => {
        console.log(error);
        reject(error);
      });
    });
  },

  disconnect() {
    socket.disconnect();
  },

  on(event, callback) {
    socket.on(event, callback);
  },

  off(event, callback) {
    socket.off(event, callback);
  },

  emit(event, data) {
    socket.emit(event, data);
  },
};
