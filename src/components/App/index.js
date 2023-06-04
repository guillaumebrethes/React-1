// == Import
import { Route, Routes } from 'react-router-dom';

// == Import local
import './styles.css';
import Home from '../pages/Home/home';
import Survey from '../pages/Survey/survey';
import Header from '../Header/header';
import Results from '../pages/Results/results';
import Error from '../Error/error';
import Freelances from '../pages/Freelances/freelances';
// import FreelanceForm from '../FreelanceForm/freelanceForm';
// import ClientForm from '../ClientForm/clientForm';

// == Composant
const App = () => {
  console.log('App => ');
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/results" element={<Results />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

// == Export
export default App;
