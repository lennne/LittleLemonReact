
import { useEffect } from 'react';
import './App.css';
import {ContainerPattern} from './components/ContainerPattern';
import EffectScreen from './components/EffectScreen';
import LiveOrdersList from './components/LiveOrder/LiveOrdersList';
import ReducerScreen from './components/ReducerScreen';
import WelcomeScreen from './components/welcomeScreen';
import { ThemeProvider } from './context/ThemeContext';
import { DataSource } from './services/DataSource';


 function App() {
 
useEffect(() => {
  const timer = setInterval(() => {
    DataSource.simulateNewOrder({
      id: Date.now(),
      item: "Pizza",
      quantity: Math.floor(Math.random() * 5) + 1,
    });
  }, 3000);

  return () => clearInterval(timer);
}, []);


  return (
    <ThemeProvider>
      <LiveOrdersList />
  </ThemeProvider>
  );
}

export default App;
