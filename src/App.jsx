import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
`;

const ImageSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;
`;

const LoginForm = styled.form`
  max-width: full;
  padding: 30px 40px;
  border: 1px solid #ddd;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h2`
  text-align: center;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  position: relative;

  label {
    display: block;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const PasswordVisibilityButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

const SubmitButton = styled.button`
  background-color: #1575a7;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1575b9;
  }
`;

const A = styled.a`
  color: #f78719;
  text-decoration: underline;
  font-size: 16px;
`;

const Span = styled.span`
  color: #f78719;
  font-size: 18px;
`;

const EyeIcon = styled.span`
  font-size: 14px;
  color: #000;
  position: absolute;
  top: 35px;
  left: 300px;
`;

const TextPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H3 = styled.h3`
  color: #f78719;
  font-size: 12px;
`;
const NewH3=styled.h3`
  
 
`

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ userid: "", password: "" });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <LoginContainer>
        <ImageSide>
          <Image
            src="https://i.ibb.co/vL5XWKF/Group-3608.jpg"
            alt="Background"
          />
        </ImageSide>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <InputContainer>
            <label htmlFor="userid">User ID</label>
            <Input
              type="text"
              id="userid"
              name="userid"
              value={formData.userid}
              onChange={handleInputChange}
              placeholder="Enter your user ID"
            />
          </InputContainer>

          <InputContainer>
            <label htmlFor="password">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
            <PasswordVisibilityButton onClick={togglePasswordVisibility}>
              {showPassword ? (
                <EyeIcon as={RiEyeOffFill} />
              ) : (
                <EyeIcon as={RiEyeFill} />
              )}
            </PasswordVisibilityButton>
          </InputContainer>
          <TextPassword>
            <CheckboxLabel>
              <Checkbox type="checkbox" id="rememberMe" />
              Remember Me
            </CheckboxLabel>
            <H3>Change Password</H3>
          </TextPassword>
          <CheckboxLabel>
            <Checkbox type="checkbox" id="agreeToTerms" />
            Agree to <A>Terms and Conditions</A>
          </CheckboxLabel>
          <SubmitButton type="submit">Login</SubmitButton>
          <NewH3>
            Don't have an account? <Span>Register Here</Span>
          </NewH3>
        </LoginForm>
      </LoginContainer>
    </Container>
  );
}

export default App;
