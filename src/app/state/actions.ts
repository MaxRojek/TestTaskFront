import { Filters } from "app/types/filters";
import { LoginUserDto } from "app/types/loginUserDto";
import { LoginUserResponse } from "app/types/loginUserResponse";
import { ProductsResponse } from "app/types/productsResponse";
import { DataHelper } from "./DataHelper";

const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserAction = async (args: LoginUserDto) => {

  const response: Response = await fetch(
    `${apiUrl}/users/login`, {
    method: 'POST',
    body: JSON.stringify(args),
  }
  );
  const dataHelper = new DataHelper<LoginUserResponse>();

  if (response.status === 201) {
    const data = await response.json();

    return dataHelper.loadSuccess(data)
  }
  else {
    return dataHelper.fail();
  }
};

export const fetchProductsAction = async (args: Filters) => {

  const response: Response = await fetch(
    `${apiUrl}/products?search=${args.search}&limit=8&page=${args.page}&promo=${args.promo}&active=${args.active}`
  );
  const dataHelper = new DataHelper<ProductsResponse>();

  if (response.status === 200) {
    const data = await response.json();

    return dataHelper.loadSuccess(data)
  }
  else {
    return dataHelper.fail();
  }
};

