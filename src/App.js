import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Analysis, News, Homepage } from './Components'
import './App.css';

function App() {
  return (
    <div className="rainmaker">
      <div className="button-nav">
        <button className="button"> <Link to="home">Home</Link> </button>

        <button className="button"> <Link to="analysis">Analysis</Link> </button>

        <button className="button"> <Link to="news">News</Link> </button>
      </div>
      <Routes>
        {/* localhost:3000/home */}
        <Route path="home" element={<Homepage />} />
        {/* localhost:3000/analysis */}
        <Route path="analysis" element={<Analysis />} />
        {/* localhost:3000/news */}
        <Route path="news" element={<News />} />
      </Routes>

    </div>
  );
}

export default App;
