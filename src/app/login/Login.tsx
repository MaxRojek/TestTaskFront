import React, { FC, useContext } from "react";
import { Link, useHistory } from 'react-router-dom';
import {
  CustomButton,
  CustomInput,
  FormWrapper,
  ImageWrapper,
  LoginFormWrapper,
  LoginImageWrapper,
  LoginPageWrapper
} from './LoginStyle';
import bitmap from "../assets/Bitmap.jpg";
import { useFormik } from 'formik';
import { LoginUserDto } from 'app/types/loginUserDto';
import { Alert, CircularProgress, Grid } from '@mui/material';
import { GlobalContext } from "app/state/contexts";
import { loginUserAction } from "app/state/actions";
import * as Yup from 'yup';
import { DataHelper } from "app/state/DataHelper";

export const Login: FC = () => {

  let history = useHistory();

  const { userState } = useContext(
    GlobalContext
  );
  const [userInfo, setUserInfo] = userState;

  const formik = useFormik<LoginUserDto>({

    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required('Required'),
      password: Yup.string()
        .required('Required'),
    }),

    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values);
      const data = new DataHelper();
      setUserInfo(data.loadingData());
      loginUserAction(values).then((res) => setUserInfo(res));
      if (userInfo.success) {
        history.push("/");
      }
    }
  });
  const { values, handleChange, errors, touched } = formik;

  return (
    <LoginPageWrapper>
      <LoginImageWrapper>
        <ImageWrapper src={bitmap} />
      </LoginImageWrapper>
      <LoginFormWrapper>
        <h2>join.tsh.io</h2>
        <FormWrapper>
          <h1>Login</h1>
          <form onSubmit={formik.handleSubmit}>
            <Grid columns={12} spacing={1} container>
              <Grid item xs={12}>
                <label><p>Username</p></label>
                <CustomInput
                  size="medium"
                  fullWidth
                  id="username"
                  name="username"
                  placeholder='Enter username'
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                />
              </Grid>
              <Grid item xs={12}>
                <label><p>Password</p></label>
                <CustomInput
                  size="medium"
                  fullWidth
                  id="password"
                  name="password"
                  placeholder='Enter password'
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                />
              </Grid>

              <Grid style={{ marginTop: '80px' }} item xs={12}>
                <CustomButton
                  disabled={userInfo.loading}
                  size='large'
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit">
                  Log in
                </CustomButton>
                <Link to='/'>Forgot password?</Link>
              </Grid>
              <Grid style={{ marginTop: '50px' }} item xs={12}>
                {
                  userInfo.error &&
                  <Alert severity="error">Some error</Alert>
                }
                {
                  userInfo.loading &&
                  <CircularProgress />
                }
              </Grid>
            </Grid>
          </form>
        </FormWrapper>
      </LoginFormWrapper>
    </LoginPageWrapper >
  );
};
