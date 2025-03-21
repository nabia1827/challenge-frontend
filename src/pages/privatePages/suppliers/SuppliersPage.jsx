import React, { useState, useEffect } from "react";
import { Flex, Grid, Form} from "antd";
import SuppliersMobile from "./SuppliersMobile";
import SuppliersWeb from "./SuppliersWeb";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../utils/paths";
const { useBreakpoint } = Grid;

function SuppliersPage() {
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;
    const [loading, setLoading] = useState(false);
    const [filterForm] = Form.useForm();
    const navigate = useNavigate();

    const onClickCreate = () =>{
        navigate(paths.CREATE_SUPPLIER)
    }

    const onChange = () =>{

    }

    const handleOnFieldsChange = (changeFields, allFields) => {
        const campo = changeFields[0].name[0];
        switchOnFieldsChange(campo, changeFields, setRequest);
    };

    const paises = [
        {
            paisId:1,
            paisNombre: "Perú"
        },
        {
            paisId:2,
            paisNombre: "Chile"
        }
    ]

    return <>{isXsScreen ?
        <SuppliersMobile
        onChange = {onChange}
        loading = {loading}
        filterForm = {filterForm}
        paises = {paises}
        handleOnFieldsChange={handleOnFieldsChange}
        onClickCreate = {onClickCreate}
        /> :
        <SuppliersWeb
        onChange = {onChange}
        loading = {loading}
        filterForm = {filterForm}
        paises = {paises}
        handleOnFieldsChange = {handleOnFieldsChange}
        onClickCreate = {onClickCreate}
        />
    }
        
    </>;
}

export default SuppliersPage;