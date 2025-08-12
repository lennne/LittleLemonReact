
import './App.css';
import {ContainerPattern} from './components/ContainerPattern';
import EffectScreen from './components/EffectScreen';
import LiveOrdersList from './components/LiveOrder/LiveOrdersList';
import ReducerScreen from './components/ReducerScreen';
import WelcomeScreen from './components/welcomeScreen';
import { ThemeProvider } from './context/ThemeContext';


 function App() {
 


  return (
    <ThemeProvider>
      <LiveOrdersList />
  </ThemeProvider>
  );
}

export default App;
