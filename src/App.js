import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import axios from 'axios';

function App() {

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000'); // Replace with your server URL
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <h1>Kanith</h1>
    </div>
  );
}

export default App;
