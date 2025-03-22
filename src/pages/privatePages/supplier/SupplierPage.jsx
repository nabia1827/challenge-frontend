import React, { useState } from "react";
import { Flex, Grid, Form } from "antd";
import SupplierWeb from "./SupplierWeb";
import SupplierMobile from "./SupplierMobile";
import { useNavigate } from "react-router-dom";
const { useBreakpoint } = Grid;

function SupplierPage(props) {
    const { type } = props;
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;
    const [form] = Form.useForm();
    const navigate = useNavigate();
    

    const handleSave = () => {

    }

    const onBack = () => {
        navigate(-1);
    }

    const countries = [
        {
            countryId:1,
            countryName: "Perú"
        },
        {
            countryId:2,
            countryName: "Chile"
        }
    ]

    return <>{isXsScreen ?
        <SupplierMobile
            form={form}
            handleSave={handleSave}
            onBack={onBack}
            type={type}
            countries = {countries}
        /> :
        <SupplierWeb
            form={form}
            handleSave={handleSave}
            onBack={onBack}
            type={type}
            countries = {countries}
        />
    }

    </>;
}

export default SupplierPage;