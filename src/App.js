import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <CountdownTimer />
      <ContactForm />
      <LoginForm />
    </div>
  );
}

export default App;
