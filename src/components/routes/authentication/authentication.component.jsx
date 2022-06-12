import SignInForm from "../../sing-in-form/sign-in-form.component";
import SignUPForm from "../../sing-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUPForm />
    </div>
  );
};

export default Authentication;
