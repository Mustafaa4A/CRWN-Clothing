import {
  createUserDocumentFromAuth,
  signInnWithGooglePopup,
} from "../../../utils/firebase/firebase.util";
import SignUPForm from "../../sing-up-form/sign-up-form.component";

const SignIn = () => {
  //google login
  const logGoogleUser = async () => {
    const { user } = await signInnWithGooglePopup(); // destructiong the user inside the response
    const userRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Singin with google</button>
      <SignUPForm />
    </div>
  );
};

export default SignIn;
