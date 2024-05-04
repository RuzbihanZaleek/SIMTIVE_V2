import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default App;
