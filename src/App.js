import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';

function App() {
  return (
   <BrowserRouter>
      <Box sx ={{backgroundColor: '#000'}}>
        <Routes>
          <Route path />
        </Routes>
      </Box>
   </BrowserRouter>
  );
}

export default App;
