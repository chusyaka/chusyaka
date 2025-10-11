import React from "react";
import "./style.css";

function ContactInfo({ name, email, message, showInfoMessage }) {
  return (
    <div className="contact-info">
      <h2 className="contact-info__title">контактная информация</h2>
      <p className="contact-info__email">email: test@test.com</p>
      <p className="contact-info__phone">phone: +7 (999) 999-99-99</p>
      <p className="contact-info__address">address: Москва, ул. Ленина, 1</p>


      {showInfoMessage && (
        <div>
          <h3>Информация о вашем сообщении</h3>
          <p>Имя: {name}</p>
          <p>Email: {email}</p>
          <p>Сообщение: {message}</p>
        </div>
      )}
    </div>
  );
}

export default ContactInfo;
