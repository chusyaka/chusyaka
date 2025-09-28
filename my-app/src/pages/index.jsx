import { useState } from "react";
import Button from "../components/button";
import Display from "../components/display";

function Home() {
  const [value, setValue] = useState("");
  const handleClick = (event) => {
    const newValue = value + event.target.textContent;
    setValue(newValue);
  };
  return (
    <div>
      <Display value={value} />
      <Button text="1" backgroundColor="red" onClick={handleClick} />
      <Button text="2" onClick={handleClick} />
      <Button text="3" onClick={handleClick} />
      <Button text="4" />
      <Button text="5" backgroundColor="green" onClick={handleClick} />
      <Button text="6" onClick={handleClick} />
      <Button text="7" onClick={handleClick} />
      <Button text="8" />
      <Button text="9" />
    </div>
  );
}

export default Home;
