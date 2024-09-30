import './App.css';
import CountdownTimer from './components/CountdownTimer';
import Counter from './components/Counter';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Counter />
      <CountdownTimer />
      <ContactForm />
    </div>
  );
}

export default App;
