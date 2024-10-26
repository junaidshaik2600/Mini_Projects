import "./App.css";
import Card from "./components/card"

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-5 rounded-xl mb-5">Tailwind test</h1>
      <Card userName = "junaid1"/>
      <Card userName = "junaid2" />
      
    </>
  );
}

export default App;
