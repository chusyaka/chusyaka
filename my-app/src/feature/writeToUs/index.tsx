import React, { useState } from "react";
import Input from "../../shared/ui/input";
import Button from "../../shared/ui/button";
import "./style.css";

function WriteToUs({ setName, setEmail, setMessage, setShowInfoMessage }) {
  

  const handleChange = (event) => {
    const type = event.target.placeholder;
    if (type === "Имя") {
      setName(event.target.value);
    } else if (type === "Email") {
      setEmail(event.target.value);
    } else if (type === "Сообщение") {
      setMessage(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    setShowInfoMessage(true);
  };

  return (
    <div className="write-to-us">
      <h2 className="write-to-us__title">Напишите нам</h2>
      <form>
        <Input
          type="text"
          placeholder="Имя"
          className="write-to-us__input"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          className="write-to-us__input"
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Сообщение"
          className="write-to-us__input"
          onChange={handleChange}
        />
        <Button
          type="button"
          className="write-to-us__button"
          onClick={handleSubmit}
        >
          Отправить
        </Button>
      </form>
    </div>
  );
}

export default WriteToUs;
