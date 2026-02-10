//create a registration from following details
// 1. name - text
// 2. email - text
// 3. password - text,regular expression
// 4. confirm password - text,regular expression
// 5. gender - radio button
// 6. country - dropdown
// 7. Terms and conditions - checkbox
// 8. color picker - color
// 9. dob - date picker
// 10. submit button

import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [color, setColor] = useState("#000000");
  const [dob, setDob] = useState("");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!passwordRegex.test(password)) {
      alert("Password must be 8+ chars, include upper, lower & number.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      alert("You must accept the terms and conditions");
      return;
    }

    alert("Registration Successful ✅");
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* 1. Name */}
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        {/* 2. Email */}
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        {/* 3. Password */}
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        {/* 4. Confirm Password */}
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <br />

        {/* 5. Gender */}
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            value="male"
            //onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            //onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
        </div>

        <br />

        {/* 6. Country */}
        <div>
          <label>Country: </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
          </select>
        </div>

        <br />

        {/* 7. Terms & Conditions */}
        <div>
          <label>
            Accept Terms & Conditions:{" "}
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </label>
        </div>

        <br />

        {/* 8. Color Picker */}
        <div>
          <label>Favorite Color: </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <br />

        {/* 9. DOB */}
        <div>
          <label>Date of Birth: </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <br />

        {/* 10. Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;