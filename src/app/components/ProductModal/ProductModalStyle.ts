import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalWrapper = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
  height: '530px',
  width: '600px',
  backgroundColor: 'white',
  borderRadius: '8px',
  borderColor: 'white',
  '@media(max-width: 768px)': {
    width: '80%',
  }
});

export const ImageWrapper = styled.img`
  position: absolute;
  height: 354px;
  width: 100%;
  object-fit: cover;
  top: 0px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
export const ContentModalWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: fit-content;
  height: 30%;
  width:'600px';
  bottom: 0px;
  padding: 25px;
`;

export const TextModalWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  color: #9194a5;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
`;

export const CloseButton = styled.div`
  margin-top:10px;
  position: absolute;
  width: fit-content;
  padding: 2px 15px 2px 15px;
  color: white;
  z-index: 1000;
  font-size: 16px;
  left:550px ;
  cursor: pointer;
`;

