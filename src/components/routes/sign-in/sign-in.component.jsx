import {
  createUserDocumentFromAuth,
  signInnWithGooglePopup,
} from "../../../utils/firebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInnWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Singin with google</button>
    </div>
  );
};

export default SignIn;
