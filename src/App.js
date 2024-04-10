import './App.css';
import Header from './components/header';
import { AuthContext } from './hooks/authProvider';

function App() {
  return (
    <>
      <AuthContext>
        <Header />
      </AuthContext>
    </>
  );
}

export default App;
