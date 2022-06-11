import { useState } from "react";
import {
  createAuthUseWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./style-up-form.styles.scss";

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confrimPassword: "",
};

//component
const SignUPForm = () => {
  const [formFeilds, setFormFields] = useState(defaultForm);
  const { displayName, email, password, confrimPassword } = formFeilds;

  //handling
  const handlerChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFeilds, [name]: value });
  };

  //submit form
  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (password !== confrimPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUseWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already in use");
      } else if (error.code === "auth/weak-password") {
        alert("Password must be atleast 6 digits");
      } else {
      }
      console.log(error.message);
    }
  };

  //reset form
  const resetFormFields = () => {
    setFormFields(defaultForm);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Ip With Email and Password</span>
      <form action="POST" onSubmit={handlerSubmit}>
        <FormInput
          label={"Display Name"}
          required
          type="text"
          name="displayName"
          value={displayName}
          id="name"
          onChange={handlerChange}
        />

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

        <FormInput
          label={"Confirm Password"}
          required
          type="password"
          name="confrimPassword"
          value={confrimPassword}
          id="confirm-password"
          onChange={handlerChange}
        />

        <Button children={"Sign Up"} type="submit" buttonType={""} />
      </form>
    </div>
  );
};

export default SignUPForm;
