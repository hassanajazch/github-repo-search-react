import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import InputForm from './components/InputForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-container">
          <Typography variant="h4" component="h1" gutterBottom>
              Create React App v4-beta example
          </Typography>
          <Button variant="contained" color="primary">
              Primary
          </Button>
          {/*<InputForm/>*/}
      </header>
    </div>
  );
}

export default App;
