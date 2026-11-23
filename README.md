<div align="center">

![Header](https://capsule-render.vercel.app/api?type=waving&color=0:0d1928,100:0f766e&height=170&section=header&text=web-worker-message-lab&fontColor=ffffff&fontSize=38)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&pause=1000&center=true&vCenter=true&width=620&lines=Explore+postMessage+and+structured+clone;Transfer+buffers+and+trace+worker+events" alt="Typing title"/>

[![License](https://img.shields.io/github/license/CyberLoop-dev/web-worker-message-lab)](LICENSE)
![Language](https://img.shields.io/github/languages/top/CyberLoop-dev/web-worker-message-lab)
[![Stars](https://img.shields.io/github/stars/CyberLoop-dev/web-worker-message-lab?style=social)](https://github.com/CyberLoop-dev/web-worker-message-lab/stargazers)
![Last commit](https://img.shields.io/github/last-commit/CyberLoop-dev/web-worker-message-lab)

<img src="assets/mark.svg" width="520" alt="Worker message flow illustration"/>

</div>

## 🧭 Overview
A local browser lab for dedicated Web Workers. Send structured objects, transfer an `ArrayBuffer`, and observe message order, worker errors, and termination.

## ✨ Features
- 📨 Send nested objects through `postMessage()`.
- 🔁 Transfer an `ArrayBuffer` and observe the sender's detached buffer.
- 🔢 Queue ordered messages and inspect their replies.
- ⏹️ Restart or terminate the Worker.
- 🔒 All examples run inside the browser; nothing is uploaded.

## 🖥️ Demo
Run the local Node.js server; no hosted demo is configured.

## 🚀 Quick Start
```bash
npm start
```
Open `http://127.0.0.1:4175`.

## 🧰 Tech Stack
- Node.js built-in HTTP server
- Dedicated Web Workers
- Structured Clone Algorithm and Transferable Objects
- Vanilla JavaScript, HTML, and CSS

## 🗂️ Folder Structure
```text
.
├── assets/mark.svg
├── public/app.js
├── public/index.html
├── public/styles.css
├── public/worker.js
├── package.json
├── server.js
└── README.md
```

## 🗺️ Roadmap
- [ ] Add a SharedWorker comparison.
- [ ] Demonstrate messageerror with an unsupported payload.
- [ ] Add a small transferable typed-array exercise.

## 🤝 Contributing
Keep examples deterministic and document which data is cloned versus transferred.

## 📄 License
MIT. See [LICENSE](LICENSE).

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0d1928&height=100&section=footer)

</div>
