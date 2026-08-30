const target = document.querySelector('#target');

const browser = navigator.userAgent;
const os = navigator.platform;

const width = screen.width;
const height = screen.height;

const availWidth = screen.availWidth;
const availHeight = screen.availHeight;

const now = new Date();

const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `
  <p>Browser: ${browser}</p>
  <p>Operating system: ${os}</p>
  <p>Screen size: ${width} x ${height}</p>
  <p>Available screen: ${availWidth} x ${availHeight}</p>
  <p>Date: ${date}</p>
  <p>Time: ${time}</p>
`;
