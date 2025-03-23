import React, { useState, useEffect } from "react";
import { Flex, Grid, Form, message } from "antd";
import SupplierWeb from "./SupplierWeb";
import SupplierMobile from "./SupplierMobile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GetSupplier, UpsertSupplier } from "../../../utils/suppliers/dinamicCalls";
import { useParams } from "react-router-dom";
const { useBreakpoint } = Grid;
import { SupplierType } from "../../../utils/constants";
function SupplierPage(props) {
    const { type } = props;
    //Current supplier
    const { id } = useParams();


    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;
    const { countries, sources } = useSelector((state) => state.app);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [supplier, setSupplier] = useState(false);
    const navigate = useNavigate();

    const fetchDataSupplier = async (supplierId) => {
        setLoading(true);
        try {
            const response = await GetSupplier(supplierId);
            setSupplier(response.data);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (type !== SupplierType.CREATE && id !== null && id !== undefined) {
            fetchDataSupplier(id)
        }
    }, [id]);

    useEffect(() => {
        //console.log("Loading supplier: ", loading);
    }, [loading]);

    useEffect(() => {
        if (type !== SupplierType.CREATE && supplier) {
            form.setFieldsValue({
                legalName: supplier.legalName,
                tradeName: supplier.tradeName,
                taxIdentNumber: supplier.taxIndentNumber,
                phone: supplier.phoneNumber,
                email: supplier.mailAddress,
                address: supplier.physicalAddress,
                countryId: supplier.countryId,
                revenue: supplier.annualRevenue,
                website: supplier.website,
            });
        }
    }, [supplier]);

    const handleSave = async () => {
        setLoading(true);
        try {
            const values = await form.validateFields();
            //console.log("Upsert form: ", values)
            UpsertSupplier(
                type == SupplierType.CREATE ? 0 : supplier.supplierId,
                values.legalName,
                values.tradeName,
                values.taxIdentNumber,
                values.phone,
                values.email,
                values.website,
                values.address,
                values.countryId,
                values.revenue
            ).then((response) => {
                if (response.isSuccess) {
                    setLoading(false);
                    message.success("Saved successfully");
                    navigate(-1);
                }
            });
        } catch (error) {
            message.error("Please complete all fields.");
        }

    }

    const onBack = () => {
        navigate(-1);
    }

    return <>{isXsScreen ?
        <SupplierMobile
            form={form}
            handleSave={handleSave}
            onBack={onBack}
            type={type}
            countries={countries}
            loading={loading}
        /> :
        <SupplierWeb
            form={form}
            handleSave={handleSave}
            onBack={onBack}
            type={type}
            countries={countries}
            loading={loading}
        />
    }

    </>;
}

export default SupplierPage;