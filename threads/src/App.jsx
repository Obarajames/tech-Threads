import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './pages/feed';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className=' '>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
