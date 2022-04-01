import { FC, useContext, useState } from 'react';
import { PageWrapperStyle } from 'app/components/PageWrapper/PageWrapperStyle';
import { Navbar } from 'app/components/Navbar/Navbar';
import { ProductCard } from 'app/components/ProductCard/ProductCard';
import { CustomPagination } from 'app/components/Pagination/Pagination';
import { GlobalContext } from 'app/state/contexts';
import { ProductDto } from 'app/types/productDto';
import { DataHelperObject } from 'app/state/DataHelper';
import { ProductsWrapper } from './ProductsStyle';
import NoResultsMessage from 'app/components/NoResultsMessage/NoResultsMessage';
import CircularProgress from '@mui/material/CircularProgress';
import { ProductModal } from 'app/components/ProductModal/ProductModal';
import { Grid } from '@mui/material';
import { ProductsResponse } from 'app/types/productsResponse';

export const Products: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModaldata] = useState<null | ProductDto>(null);

  const { filtersDispatcher, productsState } = useContext(
    GlobalContext
  );

  const [filters, setFilters] = filtersDispatcher;
  const products = productsState;

  const changePage = (page: number) => {
    setFilters(prevState => ({
      ...prevState,
      page: page,
    }));
  }

  const showModal = (data: ProductDto) => {
    setModalOpen(true);
    setModaldata(data);
  }

  const displayResults = (products: DataHelperObject<ProductsResponse>) => {

    if (products.data !== null && products.data.meta.totalItems !== 0) {
      return products.data.items.map((product) => (
        <Grid key={product.id} item lg={3} xl={3} sm={12}>
          <ProductCard
            key={product.id}
            showDetailsFunc={() => showModal(product)}
            productInfo={product}
          />
        </Grid>
      ));
    }
    if (products.loading === true) {
      return <CircularProgress />
    }
    if (products.data !== null && products.data.meta.totalItems === 0) {
      return <NoResultsMessage />
    }
  };

  return (
    <>
      <PageWrapperStyle>
        <Navbar />
        <ProductsWrapper>
          <Grid style={{ maxWidth: '80%', justifyContent: 'center' }} container>
            {displayResults(products)}

            <Grid style={{ marginTop: '60px', paddingBottom: '20px' }} item xs={12} >
              {products.data && (
                <CustomPagination
                  value={products.data.meta.currentPage}
                  range={products.data.meta.totalPages}
                  onChange={changePage}
                />)
              }
            </Grid>
          </Grid>
        </ProductsWrapper>
        <ProductModal isOpen={modalOpen} setOpen={setModalOpen} productData={modalData} />
      </PageWrapperStyle>
    </>
  );
};


