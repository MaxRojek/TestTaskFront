import styled from "styled-components";

interface PageNumberProps {
  isActive: boolean;
}

interface PageNavProps {
  disabled: boolean;
}

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PageNumber = styled.h4<PageNumberProps>`
  margin: 5px;
  cursor: pointer;
  color: ${props => props.isActive ? "#4460F7" : "black"};
  margin-left: 5px;
  margin-right: 5px;
`;

export const PageNav = styled.h4<PageNavProps>`
  margin: 5px;
  color: ${props => props.disabled ? "#9194A5" : "black"};
  margin-left: 25px;
  margin-right: 25px;
  cursor: pointer;
`;

