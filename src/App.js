import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      {/*<> //React Fragment */}
      <div className="flex">
        <div className="w-[15%]">
          <Sidebar />
        </div>

        <div className="w-[85%]">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
