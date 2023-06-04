//  === Import  ===;

import { Link, useParams } from 'react-router-dom';

//  === Import : local  ===;
import './survey.scss';
import { useEffect, useState } from 'react';
import Loader from '../../Loader/loader';

//  === Component ===;
const Survey = () => {
  console.log('Composant Survey => ');

  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumbre = questionNumberInt + 1;

  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setDataLoading] = useState(false);

  // useEffect(() => {
  //   setDataLoading(true);
  //   fetch('http://localhost:8000/survey')
  //     .then((res) => res.json()
  //       .catch((error) => console.log(error))
  //       .then(({ surveyData }) => {
  //         setSurveyData(surveyData);
  //         setDataLoading(false);
  //       }));
  // }, []);

  useEffect(() => {
    const fetchSurveyData = async () => {
      setDataLoading(true);
      try {
        const response = await fetch('http://localhost:8000/survey');
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
      }
      catch (err) {
        console.log(err);
        // setError(true);
      }
      finally {
        setDataLoading(false);
      }
    };
    fetchSurveyData();
  }, []);

  return (
    <div className="survey">
      <h1>Question n°{questionNumber} </h1>
      {isDataLoading ? (
        <Loader />
      ) : (
        <h2> {surveyData[questionNumber]} </h2>
      )}
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
