import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MiddMenu } from "./Components/MiddMenu";
import { RightMenu } from "./Components/RightMenu";
import { Routes, Route } from "react-router-dom";
import Library from "./pages/Library";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Routes>
        <Route path="/" element={<MiddMenu />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
