import './App.css';
import EffectScreen from './components/EffectScreen';
import ReducerScreen from './components/ReducerScreen';
import WelcomeScreen from './components/welcomeScreen';
import { ThemeProvider } from './context/ThemeContext';


 function App() {

  
 
  return (
    <ThemeProvider>
      <ReducerScreen />
  </ThemeProvider>
  );
}

export default App;
