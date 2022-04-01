import { Filters } from "app/types/filters";
import React, {
  FC,
  useState,
  useEffect,
  ReactNode
} from "react";
import { fetchProductsAction } from "./actions";
import { GlobalContextProvider, initGlobalContextValues } from "./contexts";
import { DataHelper } from "./DataHelper";

interface AppStateProviderProps {
  children: ReactNode;
}

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  const [filters, setFilters] = useState<Filters>(initGlobalContextValues.filters);

  const [products, setProducts] = useState(initGlobalContextValues.productsState);
  const [userInfo, setUserInfo] = useState(initGlobalContextValues.userState);

  useEffect(() => {
    setIsLogged(userInfo.success)
  }, [userInfo])

  useEffect(() => {
    const data = new DataHelper();
    setProducts(data.loadingData());
    fetchProductsAction(filters).then((res) => setProducts(res));
  }, [filters])

  return (
    <GlobalContextProvider
      value={{
        isLoggedDispatcher: [isLogged, setIsLogged],
        filtersDispatcher: [filters, setFilters],
        productsState: products,
        userState: [userInfo, setUserInfo],
      }}
    >
      {children}
    </GlobalContextProvider>
  )
}