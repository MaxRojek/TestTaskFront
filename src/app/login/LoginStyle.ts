import styled from "styled-components";
import { Button, OutlinedInput } from '@mui/material';


export const LoginPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: row;
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 100vh;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vw;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 100px;
  }
`;

export const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const FormWrapper = styled.div`
  display: flex;
  height: 90%;
  width: 90%;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 15vw;
  padding-right: 10%;
  max-width: 600px;
`;

export const CustomInput = styled(OutlinedInput)`
  border-radius: 8px !important;
  height: 50px;
`;

export const CustomButton = styled(Button)`
  border-radius: 8px !important;
  height: 50px;
  background-color: '#4460F7'
  
`;