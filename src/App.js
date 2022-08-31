// import components
import Typography from '@mui/material/Typography';
import QuoteCard from './components/QuoteCard';

// import styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Typography className="app-heading" variant="h1" gutterBottom>Quote Generator</Typography>
      <QuoteCard />
    </div>
  );
}

export default App;
