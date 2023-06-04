// == Import
import { Route, Routes } from 'react-router-dom';

// == Import local
import Home from '../Home/home';
import Survey from '../Survey/survey';
import './styles.css';

// == Composant
const App = () => {
  console.log('App => ');
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </div>
  );
};

// == Export
export default App;
