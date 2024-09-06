import "./App.css";
import ChatComponent from "./components/ChatComponent";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React app from k8s</h1>
      <div className="overflow-y-scroll">
        <ChatComponent />
      </div>
    </div>
  );
}

export default App;
