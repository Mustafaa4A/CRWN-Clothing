import { useState } from "react";
import {
  signInnWithGooglePopup,
  signInteAuthUseWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, ButtonsContainer } from "./style-in-form.styles";

const defaultForm = {
  email: "",
  password: "",
};

//component
const SignInForm = () => {
  const [formFeilds, setFormFields] = useState(defaultForm);
  const { email, password } = formFeilds;

  //handling
  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFeilds, [name]: value });
  };

  //reset form
  const resetFormFields = () => {
    setFormFields(defaultForm);
  };

  //submit form
  const handlerSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInteAuthUseWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Incorrect User email");
          break;
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        default:
          alert(error.message);
      }
    }
  };

  //sign in with google
  const signInWithGoogle = async () => {
    await signInnWithGooglePopup(); // destructiong the user inside the response
  };

  return (
    <SignInContainer>
      <h2>Don't have an account?</h2>
      <span>Sign In With Email and Password</span>
      <form action="POST" onSubmit={handlerSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          id="email"
          onChange={handlerChange}
        />

        <FormInput
          label={"Password"}
          required
          name="password"
          type="password"
          value={password}
          id="password"
          onChange={handlerChange}
        />

        <ButtonsContainer>
          <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>
            SIGN IN
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
