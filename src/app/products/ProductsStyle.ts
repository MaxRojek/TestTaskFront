import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 1000px;
  height: fit-content;
  background-color: #f2f2f2;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 100%;
    justify-content: flex-start;
    padding-top: 30px;
  }
`;

export const ProductsWrapperWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PagginationWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  max-width: 50%;
  width: fit-content;
  height: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;