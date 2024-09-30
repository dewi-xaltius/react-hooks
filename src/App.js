import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import EventRegistrationForm from './components/EventRegistrationForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <CountdownTimer />
      <ContactForm />
      <LoginForm />
      <EventRegistrationForm />
    </div>
  );
}

export default App;
