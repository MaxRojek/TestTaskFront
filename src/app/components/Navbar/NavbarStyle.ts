import styled from "styled-components";
import { OutlinedInput } from "@mui/material";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  height: fit-content;
  min-height: 120px;
  height: fit-content;
  flex-direction: row;
  padding: 20px;
  background-color: #ffffff;
  top: 0;
  padding-left: 80px;
  padding-right: 80px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 350px;
  margin-left: 10vw;
  margin-right: 10px;
  min-width: 150px;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
    margin-right: 0px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavLeftWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const NavTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const NavRightWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;

export const LoginWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
  display: flex;
  justify-content: flex-end;
}
`;
export const NavbarTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 0px;
  }
`;

export const CustomSearchInput = styled(OutlinedInput)`
  border-radius: 10px !important;
  border-color:gray !important;
`;

