import { Card } from "@mui/material";
import styled from "styled-components";

export const CustomCard = styled(Card)({
  width: '288px',
  height: '400px',
  maxHeight: '400px',
  borderRadius: '8px',
  margin: '10px',
  '@media(max-width: 768px)': {
    width: '330px',
  }
});

export const ProductRateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-left: 10px;
`;

export const PromoBadgeWrapper = styled.div`
  margin-top:20px;
  position: absolute;
  width: fit-content;
  background-color: orange;
  padding: 2px 15px 2px 15px;
  color: white;
  z-index: 1000;
  font-size: 16px;
`;

