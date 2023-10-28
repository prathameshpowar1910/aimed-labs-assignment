import { useState } from "react";
import styled from "styled-components";
import imgsvg from "/img.svg";
import "./Login.css";


const Title = styled.h1`
  font-size: 48px;
  color: #222;
  align-self: center;
`;

const LoginImg = styled.img`
  width: 30%;
  height: 60%;
  box-sizing: border-box;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  float: left;
  object-fit: cover;
  @media (max-width: 900px) {
    display: none;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  float: right;
  height: 93vh;
  width: 50%;
  box-sizing: border-box;
  margin: 20px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 12%;
  border-radius: 10px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  height: 100%;
  width: 100%;
  margin-top: 0;
  box-sizing: border-box;
  @media (max-width: 900px) {
    margin-left: 38px;
    width: 100%;
  }
`;

const InputField = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const CheckboxContainer = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  color: #737b86;
  font-size: 18px;
  margin-left: 5px;
`;
const InputLabel = styled.label`
  font-size: 18px;
  margin-left: 5px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const LinkLabel = styled.a`
  color: #f78719;
  text-decoration: underline;
`;

const RegisterLabel = styled(InputLabel)`
  margin-top: 20px;
  text-align: center;
  color: black;
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 70%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #0077ff;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0066cc;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rememberme, setRememberme] = useState(false);

  const handleLoginIdChange = (event) => {
    setLoginId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleRemembermeChange = (event) => {
    setRememberme(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login ID:", loginId);
    console.log("Password:", password);
    console.log("Terms Accepted:", termsAccepted);
  };

  return (
    <>
      <LoginImg src={imgsvg} alt="login" />
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputLabel htmlFor="loginId">Login ID</InputLabel>
          <InputField
            type="text"
            placeholder="Login ID"
            value={loginId}
            onChange={handleLoginIdChange}
          />
          <InputLabel htmlFor="password">Password</InputLabel>
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              id="rememberme"
              checked={rememberme}
              onChange={handleRemembermeChange}
            />
            <CheckboxLabel htmlFor="rememberme">Remember me</CheckboxLabel>
          </CheckboxContainer>
          <CheckboxContainer>
            <input
              type="checkbox"
              id="termsAccepted"
              checked={termsAccepted}
              onChange={handleTermsAcceptedChange}
            />
            <CheckboxLabel htmlFor="termsAccepted">
              Agree to <LinkLabel> Terms and Conditions </LinkLabel>
            </CheckboxLabel>
          </CheckboxContainer>
          <SubmitButton type="submit">Login</SubmitButton>
          <RegisterLabel>
            Don&apos;t have an account? <LinkLabel>Register Here</LinkLabel>{" "}
          </RegisterLabel>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
