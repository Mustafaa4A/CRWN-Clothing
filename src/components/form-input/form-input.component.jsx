import "./form-input.styles.scss";

const FormInput = ({ label, ...otherPeopsValues }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherPeopsValues} />
      {label && (
        <label
          className={`${
            otherPeopsValues.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
