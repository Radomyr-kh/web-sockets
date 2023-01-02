// const remoteUrl = 'wss://boiling-beach-26008.herokuapp.com';
const localUrl = 'ws://localhost:8082';

// implementation
const CHAT = document.querySelector('#chat');

const client = new WebSocket(localUrl);
client.onmessage = ({data}) => {
  CHAT.value += `${data}\n`;
};

function send() {
  const USER_NICKNAME = document.querySelector('#userName').value;
  const USER_MESSAGE = document.querySelector('#message').value;

  client.send(`${USER_NICKNAME}: ${USER_MESSAGE}`);
}
