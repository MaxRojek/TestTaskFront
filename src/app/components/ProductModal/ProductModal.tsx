import { FC } from "react"
import { Modal } from "@mui/material";
import { ModalWrapper, ContentModalWrapper, ImageWrapper, TextModalWrapper, CloseButton } from "./ProductModalStyle";
import { ProductDto } from "app/types/productDto";


interface ProductModalProps {
  isOpen: boolean,
  setOpen: (value: boolean) => void,
  productData: null | ProductDto,
}

export const ProductModal: FC<ProductModalProps> = (props) => {
  const { isOpen, setOpen, productData } = props;

  return (
    productData && (
      <Modal
        open={isOpen}
        onClose={() => setOpen(!isOpen)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalWrapper>
          <CloseButton onClick={() => setOpen(!isOpen)} >X</CloseButton>
          <ImageWrapper src={productData.image} />
          <ContentModalWrapper>
            <h2>{productData.name}</h2>
            <TextModalWrapper>{productData.description}</TextModalWrapper>
          </ContentModalWrapper>
        </ModalWrapper>
      </Modal>
    )
  );
}
