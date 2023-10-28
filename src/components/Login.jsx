import { useState } from "react";
import styled from "styled-components";
import imgsvg from "/img.svg";
import "../assets/styles/Login.css";
import hideimg from "/hide.png";
import showimg from "/show.png";

const Title = styled.h1`
  font-size: 48px;
  color: #222;
  align-self: center;
`;

const LoginImg = styled.img`
  width: 25%;
  height: 60%;
  margin: 20px;
  position: absolute;
  float: left;
  top: 17%;
  left: 7%;
  transition: all 0.3s;
  @media (max-width: 1007px) {
    display: none;
    width: 100%;
    left: 0;
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
  width: 56%;
  box-sizing: border-box;
  margin: 20px;
  transition: all 0.6s ease-in-out;
  @media (max-width: 1007px) {
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
  @media (max-width: 1007px) {
    margin-left: 38px;
    width: 100%;
  }
`;

const InputFieldContainer = styled.div`
  position: relative;
  width: 100%;
`;


const InputField = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding-right: 30px;
  @media (max-width: 1007px) {
    width: 100%;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const ForgotPasswordLabel = styled(LinkLabel)`
  text-decoration: none;
  color: #f78719;
  font-size: 18px;
  font-weight: 400;
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 70%;
  padding: 10px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  background-color: #1575a7;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  @media (max-width: 900px) {
    width: 70%;
  }
`;

const PasswordVisibilityToggle = styled.i`
  position: absolute;
  top: 45%;
  right: -4%;
  cursor: pointer;
`;

const ShowIcon = () => {
  return <img width={"24px"} src={showimg} alt="showimg" />;
};

const HideIcon = () => {
  return <img width={"24px"} src={hideimg} alt="hideimg" />;
};

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [rememberme, setRememberme] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
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
            placeholder="Enter Login ID"
            value={loginId}
            onChange={handleLoginIdChange}
          />
          <InputFieldContainer>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <PasswordVisibilityToggle onClick={handleTogglePassword}>
              {showPassword ? <HideIcon /> : <ShowIcon />}
            </PasswordVisibilityToggle>
          </InputFieldContainer>
          <RememberMeContainer>
            <CheckboxContainer>
              <input
                type="checkbox"
                id="rememberme"
                checked={rememberme}
                onChange={handleRemembermeChange}
              />
              <CheckboxLabel htmlFor="rememberme">Remember me</CheckboxLabel>
            </CheckboxContainer>
            <ForgotPasswordLabel>Change Password</ForgotPasswordLabel>
          </RememberMeContainer>
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
            Don&apos;t have an account? <LinkLabel>Register Here</LinkLabel>
          </RegisterLabel>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default Login;
