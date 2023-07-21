import React, { useState } from "react";
import "./SignupForm.css";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    let valid = true;
    if (!firstName) {
      setFirstNameError("First name is required.");
      valid = false;
    }
    if (!lastName) {
      setLastNameError("Last name is required.");
      valid = false;
    }
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    if (!username) {
      setUsernameError("Username is required.");
      valid = false;
    }
    if (!isValidPassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
      valid = false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }

    if (valid) {
      // Your form submission logic here
      console.log("Form submitted successfully!");
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

  const handleFirstNameBlur = () => {
    if (!firstName) {
      setFirstNameError("First name is required.");
    } else {
      setFirstNameError("");
    }
  };

  const handleLastNameBlur = () => {
    if (!lastName) {
      setLastNameError("Last name is required.");
    } else {
      setLastNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handleUsernameBlur = () => {
    if (!username) {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!isValidPassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div className="form__container">
      <div className="signin">
        <button>SIGN IN</button>
      </div>
      <div className="ad__text">
        <span>Explore & Experience</span>
        <h3>Get onto your most comfortable journey yet.All the way up.</h3>
      </div>
      <form className="form__container__form" onSubmit={handleFormSubmit}>
        <div className="name__container">
          <div className="name__field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={handleFirstNameBlur}
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
              onChange={(e) => setLastName(e.target.value)}
              onBlur={handleLastNameBlur}
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
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
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
            onChange={(e) => setUsername(e.target.value)}
            onBlur={handleUsernameBlur}
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
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={handleConfirmPasswordBlur}
            required
          />
          {confirmPasswordError && (
            <p className="error-message">{confirmPasswordError}</p>
          )}
        </div>

        <div className="form__buttons">
          <button type="submit" className="signin__button">
            GET STARTED
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
