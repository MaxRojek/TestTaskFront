import React from "react";
import {
  MessageTextWrapper,
  MessageWrapper,
  MessageCenter,
} from "./NoResultsMessageStyle";

import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';

const NoResultsMessage = () => {
  return (
    <MessageCenter>
      <MessageWrapper>
        <ShoppingBagOutlined style={{ color: '#B9BDCF', fontSize: '2.5rem' }} />
        <h5>Ooops... It's empty here</h5>
        <MessageTextWrapper>
          There are no products on the list
        </MessageTextWrapper>
      </MessageWrapper>
    </MessageCenter>
  );
};
export default NoResultsMessage;