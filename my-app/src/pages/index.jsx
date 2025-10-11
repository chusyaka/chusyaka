import React, { useState, useEffect } from "react";
import WriteToUs from "../feature/writeToUs";
import ContactInfo from "../feature/contact-info";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  useEffect(() => {
    if (showInfoMessage === true) {
      setTimeout(() => {
        setShowInfoMessage(false);
      }, 3000);
    }
  }, [showInfoMessage]);

  return (
    <div>
      <h1>Контакты</h1>
      <div className="home-page" style={{ display: "flex", gap: "20px" }}>
        <WriteToUs
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          setShowInfoMessage={setShowInfoMessage}
        />
        <ContactInfo
          name={name}
          email={email}
          message={message}
          showInfoMessage={showInfoMessage}
        />
      </div>
    </div>
  );
}

export default Home;
