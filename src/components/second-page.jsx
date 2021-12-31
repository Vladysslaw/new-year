import React from "react";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return (
    <div className="second-page" >
      <div className="container-fluid">
        <h1>Я задал себе вопрос, что я умею делать лучше всего? Программировать. Поэтому я хочу, чтобы вы загадали желания, которые я обязательно для вас исполню в следующем году с помощью программирования :)</h1>
        <button>
          <Link to="/3" className="toSecondLink" >Далее</Link>
        </button>
      </div>
    </div>
  )
}

export default SecondPage;
