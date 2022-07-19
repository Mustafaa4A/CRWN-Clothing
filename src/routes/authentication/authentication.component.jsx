import SignInForm from "../../components/sing-in-form/sign-in-form.component";
import SignUpForm from "../../components/sing-up-form/sign-up-form.component";
import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
      <SignUpForm />
    </AuthContainer>
  );
};

export default Authentication;
