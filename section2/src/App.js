import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  let name ="Francis"

  return (
    <div className="App">
      <Header />
      <p>This is the body. My name is {name}.</p>
      <Footer />
    </div>
  );
}