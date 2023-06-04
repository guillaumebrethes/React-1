//  === Import  ===;

import { Link, useParams } from 'react-router-dom';

//  === Import : local  ===;
import './survey.scss';
import { useEffect, useState } from 'react';

//  === Component ===;
const Survey = () => {
  console.log('Composant Survey => ');

  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumbre = questionNumberInt + 1;

  const [questionApi, setQuestionApi] = useState({});
  const [surveyData, setSurveyData] = useState({});

  useEffect(() => {
    // setDataLoading(true);
    fetch('http://localhost:8000/survey')
      .then((res) => res.json()
        .then(({ surveyData }) => setSurveyData(surveyData))
        .catch((error) => console.log(error)));
  }, []);
  return (
    <div className="survey">
      <h1>Question n°{questionNumber} </h1>
      <h2> {surveyData[questionNumber]} </h2>
      <div className="survey__links">
        <Link to={`/survey/${prevQuestionNumber}`}> Précédent </Link>
        {
          surveyData[questionNumberInt + 1] ? (
            <Link to={`/survey/${nextQuestionNumbre}`}> Suivant </Link>
          ) : (
            <Link to="/results"> Résulats</Link>
          )
        }
      </div>

    </div>
  );
};

export default Survey;
