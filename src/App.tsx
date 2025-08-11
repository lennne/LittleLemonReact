import './App.css';
import WelcomeScreen from './components/welcomeScreen';
import { ThemeProvider } from './context/ThemeContext';


 function App() {

  
 
  return (
    <ThemeProvider>
      <WelcomeScreen />
  </ThemeProvider>
  );
}

export default App;
