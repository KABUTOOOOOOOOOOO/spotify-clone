import './App.css';
import { LeftMenu } from './Components/LeftMenu';
import { MiddMenu } from './Components/MiddMenu';
import { RightMenu } from './Components/RightMenu';

function App() {
  return (
    <div className="App">
        <LeftMenu />
        <MiddMenu/>
        <RightMenu/>

        <div className="background"></div>
    </div>
  );
}

export default App;
