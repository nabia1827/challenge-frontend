import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import store from '../store/store';
import { paths, pathSegments } from '../utils/paths';
//import { Perfiles } from '../utils/constants';
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
      console.log("Token: ", tokenDecode);
      const user = {
        userId: tokenDecode.UserId,
        username: tokenDecode.Username,
        userFirstName: tokenDecode.UserFirstName,
        userLastName: tokenDecode.UserLastName,
        profileId: Number(tokenDecode.ProfileId),
        userEmail: tokenDecode.UserEmail,
        userImage: tokenDecode.UserImage,
      };
      console.log("Refresh- Logged in: ", user);
      dispatch(login(user));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      /*
      dispatch(cargarAbogados())
      dispatch(cargarSubfases())
      dispatch(cargarDelegados())
      dispatch(cargarClasesDoc(1))
      dispatch(cargarClasesDoc(0))
      dispatch(CargarSubtipoDanio())
      dispatch(CargarDependenciaMininter())
      dispatch(CargarProcuradores())
      dispatch(CargarDepartamentos())
      dispatch(cargarDelitos())
      dispatch(cargarTiposAudiencia())
      dispatch(cargarTiposRemitente())
      dispatch(cargarTiposPena())
      dispatch(cargarTiposSentencia())  
      dispatch(cargarDistritosJudicial()) */

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

/*

<Route path="/" element={<InternalPage isAuthenticated={isAuthenticated} />}>
<Route index element={<HomePage />} />
<Route path={endpoints.HOME} element={<HomePage />} />

<Route path={endpoints.CONSULTA_LEGAJOS} element={<ConsultaLegajosPage />}>

  <Route path={endpoints.MIS_LEGAJOS} element={<MisLegajosPage />}>
    <Route index element={<ListadoLegajosPage allLegajos = {false}/>} />
    <Route path=":id" element={<LegajoPage />} >
      <Route path={endpoints.DETALLE_LEGAJO} element={<DetalleLegajoPage />} />
      <Route path={endpoints.DOCS_INGRESO_LEGAJO} element={<DocsIngresoPage />} />
      <Route path={endpoints.DOCS_SALIDA_LEGAJO} element={<SalidaSectionPage />} >
        <Route index element={<DocsSalidaPage/>} />
        <Route path={`${endpoints.CREAR_DOC}/:claseDocumento`} element={<CrearDocPage />} />
      </Route>
    </Route>
  </Route>

  <Route path={endpoints.TODOS_LEGAJOS} element={<TodosLegajosPage />}>
    <Route index element={<ListadoLegajosPage allLegajos = {true}/>} />
    <Route path=":id" element={<LegajoPage />} >
      <Route path={endpoints.DETALLE_LEGAJO} element={<DetalleLegajoPage />} />
      <Route path={endpoints.DOCS_INGRESO_LEGAJO} element={<DocsIngresoPage />} />
      <Route path={endpoints.DOCS_SALIDA_LEGAJO} element={<SalidaSectionPage />} >
        <Route index element={<DocsSalidaPage/>} />
        <Route path={`${endpoints.CREAR_DOC}/:claseDocumento`} element={<CrearDocPage />} />
      </Route>
    </Route>
  </Route>

</Route>

<Route path={endpoints.AUDIENCIAS} element={<AudienciasPage></AudienciasPage>}>
  <Route path={endpoints.MIS_AUDIENCIAS} element={<MisAudienciasPage />} />
  <Route path={endpoints.TODAS_AUDIENCIAS} element={<TodasAudienciasPage />} />
</Route>


<Route path={endpoints.REPORTE_LEGAJOS} element={<ReporteLegajosPage></ReporteLegajosPage>}>
  <Route path={endpoints.REPORTE_GENERAL} element={<ReporteGeneralPage />} />
  <Route path={endpoints.SEGUIMIENTO} element={<SeguimientoPage />} />
</Route>

<Route path={endpoints.RECEPCION_LEGAJOS} element={<InicioRecepcionPage/>} >
  <Route index element={<RecepcionPage />} />
  <Route path={`${endpoints.NUEVO_LEGAJO}/:legajoId/:documentoId/:audienciaId`} element={<NuevoLegajoPage/>} />
  <Route path={`${endpoints.ADICIONAR_LEGAJO}/:legajoId/:documentoId/:audienciaId`} element={<AdicionarDocsPage/>} />
</Route>
</Route>
<Route path="*" component={<NotFoundPage />} />
*/