const Button = ({ text, color, textColor }) => {
  const buttonStyle = {
    color: textColor,
    backgroundColor: color,
  };

  return (
    <button style={buttonStyle} className="btn">
      {text}
    </button>
  );
};

export default Button;
