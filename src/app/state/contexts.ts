import {
  createContext,
  Context,
  Consumer,
  Dispatch,
  SetStateAction,
  Provider,
} from "react";
import { Filters } from "app/types/filters";
import { LoginUserResponse } from "app/types/loginUserResponse";
import { ProductsResponse } from "app/types/productsResponse";
import { DataHelper, DataHelperObject } from "./DataHelper";

export type GlobalContextType = Context<GlobalContextDispatchers>;
type GlobalContextConsumerType = Consumer<GlobalContextDispatchers>;
type GlobalContextProviderType = Provider<GlobalContextDispatchers>;


export type IsLoggedDispatcher = [boolean, Dispatch<SetStateAction<boolean>>];
export type FiltersDispatcher = [Filters, Dispatch<SetStateAction<Filters>>];
export type ProductsState = DataHelperObject<ProductsResponse>;
export type UserStateDispatcher = [DataHelperObject<LoginUserResponse>, Dispatch<SetStateAction<DataHelperObject<LoginUserResponse>>>];


export interface GlobalContextValues {
  isLogged: boolean;
  filters: Filters;
  productsState: ProductsState;
  userState: DataHelperObject<LoginUserResponse>;
}

export interface GlobalContextDispatchers {
  isLoggedDispatcher: IsLoggedDispatcher;
  filtersDispatcher: FiltersDispatcher;
  productsState: ProductsState;
  userState: UserStateDispatcher;
}

export const initGlobalContextValues: GlobalContextValues = {
  isLogged: false,
  filters: {
    search: '',
    promo: false,
    active: false,
    page: 1,
  },
  productsState: new DataHelper<ProductsResponse>(),
  userState: new DataHelper<LoginUserResponse>(),
};

export const GlobalContext: GlobalContextType = createContext<GlobalContextDispatchers>((initGlobalContextValues as unknown) as GlobalContextDispatchers);

export const GlobalContextConsumer: GlobalContextConsumerType =
  GlobalContext.Consumer;

export const GlobalContextProvider: GlobalContextProviderType =
  GlobalContext.Provider;