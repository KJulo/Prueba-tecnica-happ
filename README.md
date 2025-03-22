# Prueba técnica Happ

## 📌Objective

Develop a web application in React + TypeScript + Vite that allows to search news in real time using the News API. using
the News API. The application should display search results and allow to manage a recent search history using Redux
Toolkit. manage a history of recent searches using Redux Toolkit.

## 📦 Dependencies

- NPM 10.9.2 or higher
- Node 22.14.0 or higher

## 🔧 Installing

```bash
  git clone https://github.com/KJulo/Prueba-tecnica-happ.git
  cd Prueba-tecnica-happ
  npm install
```

## 🚀 Running

- After installing dependencies create in the root of the project a file called `.env` and add the following content:

```env
  VITE_API_URL=https://newsapi.org/v2
  VITE_API_KEY=YOUR_API_KEY
```

'YOUR_API_KEY' is the key that you get from the [News API](https://newsapi.org/)

after that, run the following command:

```bash
  npm run dev
  open http://localhost:5173/
```

## 🛠️ Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
