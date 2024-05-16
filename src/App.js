import logo from './logo.svg';
import './App.css';
import Header from './Header';
import InputBox from './InputBox';
import Button, { FindButton } from './Button';
import RecButton from './Button';
//import GoogleFontLoader from 'react-google-font-loader';


function App() {
  return (
    <div className="App">
      <Header />
      <InputBox />
      <RecButton />
      <FindButton />
    </div>
  );
}

export default App;
