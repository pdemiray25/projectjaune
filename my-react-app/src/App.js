import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import PersonInfo from './PersonInfo';

function App() {
   const namee="it is me";
 return(
<div>
  <Header/>
  <h2>HELLO AGAIN {namee}</h2>
  <Main/>
  <h2>Personal Information</h2>
  <PersonInfo name="Allye" age={42} country="France"/>
  <PersonInfo name="Aisha" age={34} country="Tanzania" />
  
</div>
);
}
export default App;
