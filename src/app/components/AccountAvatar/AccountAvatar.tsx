import { useContext, useState } from "react";
import { AppRoute } from "../../../routing/AppRoute.enum";
import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { GlobalContext, initGlobalContextValues } from "../../state/contexts";
import { useHistory } from "react-router-dom";

export const AccountAvatar = () => {
  const history = useHistory();
  const { isLoggedDispatcher, userState } = useContext(GlobalContext);
  const [isLogged, setIsLogged] = isLoggedDispatcher;
  const [userInfo, setUserInfo] = userState;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setUserInfo(initGlobalContextValues.userState);
  }

  return (
    <>
      {isLogged ? (
        <div>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src="/broken-image.jpg" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}

            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem style={{ width: '160px' }} onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          onClick={() => history.push(AppRoute.Login)}
          style={{ textTransform: 'none' }}
          variant="outlined">
          Login
        </Button>
      )}
    </>
  );
};