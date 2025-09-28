import "./style.css";
function Button({ text, backgroundColor, onClick }) {
  return (
    <div
      className="button"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
