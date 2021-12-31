import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {

  return (
    <div className="first-page" >
      <div className="container-fluid">
        <h1>Новогоднее поздравление для трёх Кудравцов и одной Ольхи</h1>
        <button>
          <Link to="/2" className="toSecondLink" >Нажми на меня</Link>
        </button>
      </div>
    </div>
  )
}

export default FirstPage;
