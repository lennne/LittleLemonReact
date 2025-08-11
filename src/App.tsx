import './App.css';
import EffectScreen from './components/EffectScreen';
import WelcomeScreen from './components/welcomeScreen';
import { ThemeProvider } from './context/ThemeContext';


 function App() {

  
 
  return (
    <ThemeProvider>
      <EffectScreen />
  </ThemeProvider>
  );
}

export default App;
