import { FC, useContext, useState } from "react"
import { Checkbox, FormControlLabel, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { AccountAvatar } from "../AccountAvatar/AccountAvatar";
import {
  NavbarWrapper,
  InputWrapper,
  NavLeftWrapper,
  NavRightWrapper,
  CheckboxWrapper,
  NavTopWrapper,
  CustomSearchInput,
  LoginWrapper,
} from "./NavbarStyle";
import { GlobalContext } from "app/state/contexts";


export const Navbar: FC = () => {

  const { filtersDispatcher } = useContext(GlobalContext);

  const [filters, setFilters] = filtersDispatcher;

  const [search, setSearch] = useState(filters.search);


  const handleChangeFilters = (name: string, value: any) => {
    setFilters(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <NavbarWrapper>
      <NavLeftWrapper>
        <NavTopWrapper>
          <div style={{ fontSize: "23px", fontWeight: "560" }}>join.tsh.io</div>
          <LoginWrapper><AccountAvatar /></LoginWrapper>
        </NavTopWrapper>
        <InputWrapper>
          <CustomSearchInput

            style={{ outline: 'none', border: 'none' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyUp={() => handleChangeFilters('search', search)}
            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
            fullWidth
            name='search'
            placeholder="Search"
          />
        </InputWrapper>
        <CheckboxWrapper>
          <FormControlLabel
            onClick={() => handleChangeFilters('active', !filters.active)}
            value={filters.active}
            control={
              <Checkbox name="antoine" />
            }
            label="Active"
          />
          <FormControlLabel
            onClick={() => handleChangeFilters('promo', !filters.promo)}
            value={filters.promo}
            control={
              <Checkbox name="antoine" />
            }
            label="Promo"
          />
        </CheckboxWrapper>
      </NavLeftWrapper>
      <NavRightWrapper>
        <AccountAvatar />
      </NavRightWrapper>
    </NavbarWrapper>
  )
}