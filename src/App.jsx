import './App.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import { UserProvider } from './context/UserState';

function App() {
  return (
    <>
      <UserProvider>
        <Header/>
        <Register/>
      </UserProvider>
    </>
  );
}

export default App;