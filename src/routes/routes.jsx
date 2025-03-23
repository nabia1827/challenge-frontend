import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import store from '../store/store';
import { paths, pathSegments } from '../utils/paths';
import { loadContries,loadSources } from '../store/actions/app/appActionAsync';
import { getAccessToken } from '../utils/cookie';
import { jwtDecode } from 'jwt-decode';
import { login } from '../store/actions/auth/authActionSync';
import LoginPage from '../pages/publicPages/login/LoginPage';
import PrivatePage from '../pages/privatePages/privatePage';
import ItemPage from '../pages/privatePages/ItemPage';
import SupplierPage from '../pages/privatePages/supplier/SupplierPage';
import SuppliersPage from '../pages/privatePages/suppliers/SuppliersPage';
import { SupplierType } from '../utils/constants';

const RoutesApp = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const userId = store.getState().auth.user.usuId;
  const perfilId = store.getState().auth.user.perfilId;
  const dispatch = useDispatch();


  useEffect(() => {

    const token = getAccessToken();
    if (token) {
      const tokenDecode = jwtDecode(token);
      //console.log("Token: ", tokenDecode);
      const user = {
        userId: tokenDecode.UserId,
        username: tokenDecode.Username,
        userFirstName: tokenDecode.UserFirstName,
        userLastName: tokenDecode.UserLastName,
        profileId: Number(tokenDecode.ProfileId),
        userEmail: tokenDecode.UserEmail,
        userImage: tokenDecode.UserImage,
      };
      //console.log("Refresh- Logged in: ", user);
      dispatch(login(user));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      
      dispatch(loadContries())
      dispatch(loadSources())


    }
  }, [dispatch, isAuthenticated]);

  return (
    <Router>
      <Routes>
        {/* Public routes */}

        <Route path={`/${pathSegments.LOGIN}`} element={<LoginPage />} />

        {/* Private routes */}
        <Route path="/" element={<PrivatePage isAuthenticated={isAuthenticated} />}>
          <Route index element={<SuppliersPage />} />
          <Route path={pathSegments.CREATE_SUPPLIER} element={<SupplierPage type={SupplierType.CREATE}/>} />
          <Route path=":id" element={<ItemPage />} >
            <Route path={pathSegments.SEE_SUPPLIER} element={<SupplierPage type={SupplierType.SEE}/>} />
            <Route path={pathSegments.EDIT_SUPPLIER} element={<SupplierPage type={SupplierType.EDIT}/>} />
          </Route>
        </Route>


      </Routes>
    </Router>
  );
};

export default RoutesApp;
