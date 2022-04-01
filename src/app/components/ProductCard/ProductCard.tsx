import React, { FC } from "react";
import { Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductDto } from "../../types/productDto";
import { CustomCard, ProductRateWrapper, PromoBadgeWrapper } from "./ProductCardStyle";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface ProductCardProps {
  showDetailsFunc: (data: ProductDto) => void,
  productInfo: ProductDto,
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { showDetailsFunc, productInfo } = props;


  const countRate = (rate: number) => {
    const maxRate = 5;
    let stars = [];

    for (let index = 1; index <= maxRate; index++) {
      if (index > rate) {
        stars.push(<StarOutlineIcon style={{ color: '#B1B5C9' }} key={index} />)
      }
      else {
        stars.push(<StarIcon style={{ color: '#F9A52B' }} key={index} />)
      }
    }
    return stars;
  }

  return (
    <CustomCard>
      {productInfo.promo && <PromoBadgeWrapper>Promo</PromoBadgeWrapper>}
      <CardMedia
        component="img"
        height="170"
        image={productInfo.image}
        alt="product image"
        style={{ filter: productInfo.active ? 'grayscale(0%)' : 'grayscale(100%)' }}
      />
      <CardContent style={{ minHeight: '110px' }} >
        <Typography gutterBottom variant="h6" component="div">
          {productInfo.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productInfo.description}
        </Typography>
      </CardContent>
      <ProductRateWrapper>{countRate(productInfo.rating)}</ProductRateWrapper>
      <CardActions>

        <Button
          onClick={() => showDetailsFunc(productInfo)}
          variant="contained"
          style={{
            color: 'white',
            textTransform: 'none',
            backgroundColor:
              productInfo.active ? '#4460F7' : "#9194A5"
          }}
          fullWidth
          disableElevation
          disabled={!productInfo.active}
        >
          {productInfo.active ? 'Show details' : 'Unavailable'}
        </Button>
      </CardActions>
    </CustomCard>
  )
}