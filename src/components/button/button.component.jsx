import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherPropsValue }) => {
  return (
    <button className={`button-container ${buttonType}`} {...otherPropsValue}>
      {children}
    </button>
  );
};

export default Button;
