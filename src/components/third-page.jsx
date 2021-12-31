import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ThirdPage = ({setName}) => {
  const [value, setValue] = useState('');

  const onChangeValue = (e) => {
    setValue(e.target.value);
  }
  
  return (
    <div className="third-page" >
      <div className="container-fluid">
        <h1>Введи свое имя с большой буквы...</h1>
        <input type="text" name="name" id="name" value={value} onChange={onChangeValue} />

        <button onClick={setName(value)}>
          <Link to="/4" className="toSecondLink" >Далее</Link>
        </button>
      </div>
      
    </div>
  )
}

export default ThirdPage;
