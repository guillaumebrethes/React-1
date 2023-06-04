//  === Import  ===;

import { Link, useParams } from 'react-router-dom';

//  === Import : local  ===;
import './survey.scss';

//  === Component ===;
const Survey = () => {
  console.log('Composant Survey => ');

  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumbre = questionNumberInt + 1;

  return (
    <div className="survey">
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}> Précédent </Link>
      {
        questionNumberInt === 10 ? (
          <Link to="/results"> Résulats</Link>
        ) : (
          <Link to={`/survey/${nextQuestionNumbre}`}> Suivant </Link>

        )
      }
    </div>
  );
};

export default Survey;
