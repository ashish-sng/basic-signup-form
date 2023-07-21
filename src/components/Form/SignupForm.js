import React, { useEffect, useState } from "react";
import "./SignupForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASEURL from "../../baseurl";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [buttondisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      usernameError ||
      passwordError ||
      confirmPasswordError
    ) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [
    firstNameError,
    lastNameError,
    emailError,
    usernameError,
    passwordError,
    confirmPasswordError,
  ]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    try {
      const response = await axios.post(`${BASEURL}/register`, data);
      console.log(response);
      setFirstName("");
      setLastName("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error(error.response.data.error, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    if (!e.target.value) {
      setFirstNameError("First name is required.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    if (!e.target.value) {
      setLastNameError("Last name is required.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!isValidEmail(e.target.value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!e.target.value) {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!isValidPassword(e.target.value)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const newFeature = () => {
    toast.info("This feature is not available yet.");
  };

  return (
    <div className="form__container">
      <div className="signin">
        <button onClick={newFeature}>SIGN IN</button>
      </div>
      <div className="ad__text">
        <span>Explore & Experience</span>
        <h3>Get onto your most comfortable journey yet. All the way up.</h3>
      </div>
      <form className="form__container__form" onSubmit={handleFormSubmit}>
        <div className="name__container">
          <div className="name__field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameChange} // Perform validation on focus out
              required
            />
            {firstNameError && (
              <p className="error-message">{firstNameError}</p>
            )}
          </div>
          <div className="name__field">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={handleLastNameChange} // Perform validation on focus out
              required
            />
            {lastNameError && <p className="error-message">{lastNameError}</p>}
          </div>
        </div>

        <div className="field__container">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailChange} // Perform validation on focus out
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="field__container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleUsernameChange} // Perform validation on focus out
            required
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>

        <div className="field__container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordChange} // Perform validation on focus out
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        <div className="field__container">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onBlur={handleConfirmPasswordChange} // Perform validation on focus out
            required
          />
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
        </div>

        <div className="form__buttons">
          <button
            disabled={buttondisabled}
            type="submit"
            className={`signin__button ${
              buttondisabled ? "signin__button__disabled" : ""
            }`}
          >
            {buttondisabled ? "COMPLETE THE FORM FIRST" : "GET STARTED"}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupForm;
