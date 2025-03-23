import React, { useState, useEffect } from "react";
import { Flex, Grid, Form, message } from "antd";
import SuppliersMobile from "./SuppliersMobile";
import SuppliersWeb from "./SuppliersWeb";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../utils/paths";
import { useSelector } from "react-redux";
import api from "../../../services/api";
import useSupplierFilteredData from "../../../hooks/filters/useSupplierFilteredData";
import { switchOnFieldsChange } from "../../../utils/suppliers/switchOnFieldsChange";
import { DeleteSupplier } from "../../../utils/suppliers/dinamicCalls";
const { useBreakpoint } = Grid;

function SuppliersPage() {
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;

    const { countries, sources } = useSelector((state) => state.app);
    const [filterForm] = Form.useForm();
    const navigate = useNavigate();

    const customApiCall = async (filteredRequest) => {
        const response = await api.Supplier.ListSuppliers(filteredRequest);
        return response;
    };
    const {
        paginador,
        loading,
        onChange,
        request,
        setRequest,
        onReset,
        form,
        reloadData,
        usuId
    } = useSupplierFilteredData(customApiCall);

    //Item Operations 
    const onClickCreate = () => {
        navigate(paths.CREATE_SUPPLIER)
    }

    const onClickEdit = (id) => {
        navigate(paths.EDIT_SUPPLIER(id))
    }

    const onClickSee = (id) => {
        navigate(paths.SEE_SUPPLIER(id))
    }



    //Filter
    const handleOnFieldsChange = (changeFields, allFields) => {
        const campo = changeFields[0].name[0];
        switchOnFieldsChange(campo, changeFields, setRequest);
    };

    // Modal Delete
    const [mdDeleteOpen, setMdDeleteOpen] = useState(false);
    const [mdDeleteLoading, setMdDeleteLoading] = useState(false);
    const [deleteForm] = Form.useForm();
    const [currentSupplier, setCurrentSupplier] = useState(null);

    const showMdDelete = (record) => {
        setCurrentSupplier(record);
        setMdDeleteOpen(true);
    };

    const onOkMdDelete = () => {
        setMdDeleteLoading(true)
        DeleteSupplier(currentSupplier.supplierId).then((response) => {
            if (response.isSuccess) {
                message.success("Successfully removed");
                setMdDeleteOpen(false);
                setCurrentSupplier(null);
            }
        });
    };

    const onCancelMdDelete = () => {
        setMdDeleteOpen(false);
        setCurrentSupplier(null);
    };

    // Modal Screening
    const [mdScrOpen, setMdScrOpen] = useState(false);
    const [mdScrLoading, setMdScrLoading] = useState(false);
    const [scrappedData, setScrappedData] = useState([]);
    const [scrForm] = Form.useForm();

    const dummyData = [
        {
            id: 1,
            entity: "NAMCHOW (BRITISH VIRGIN ISLANDS) LTD.",
            jurisdiction: "British Virgin Islands",
            linkedTo: "Hong Kong",
            dataFrom: "Panama Papers",
        },
        {
            id: 2,
            entity: "NAMCHOW (BRITISH VIRGIN ISLANDS) LTD.",
            jurisdiction: "British Virgin Islands",
            linkedTo: "Hong Kong",
            dataFrom: "Panama Papers",
        },
    ]

    const showMdScr = (record) => {
        setCurrentSupplier(record)
        setMdScrOpen(true);
    };

    const onOkMdScr = () => {
        setScrappedData(dummyData);
    };

    const onCancelMdScr = () => {
        setMdScrOpen(false);
        setCurrentSupplier(null);
    };



    return <>{isXsScreen ?
        <SuppliersMobile
            onChange={onChange}
            loading={loading}
            filterForm={filterForm}
            countries={countries}
            handleOnFieldsChange={handleOnFieldsChange}
            onClickCreate={onClickCreate}
            onClickEdit={onClickEdit}
            onClickSee={onClickSee}
            mdDeleteOpen={mdDeleteOpen}
            mdScrOpen={mdScrOpen}
            showMdDelete={showMdDelete}
            showMdScr={showMdScr}
            onOkMdDelete={onOkMdDelete}
            onOkMdScr={onOkMdScr}
            onCancelMdDelete={onCancelMdDelete}
            onCancelMdScr={onCancelMdScr}
            scrForm={scrForm}
            currentSupplier={currentSupplier}
            sources={sources}
            scrappedData={scrappedData}
            mdScrLoading={mdScrLoading}
            paginador={paginador}
        /> :
        <SuppliersWeb
            onChange={onChange}
            loading={loading}
            filterForm={filterForm}
            countries={countries}
            handleOnFieldsChange={handleOnFieldsChange}
            onClickCreate={onClickCreate}
            onClickEdit={onClickEdit}
            onClickSee={onClickSee}
            mdDeleteOpen={mdDeleteOpen}
            mdScrOpen={mdScrOpen}
            showMdDelete={showMdDelete}
            showMdScr={showMdScr}
            onOkMdDelete={onOkMdDelete}
            onOkMdScr={onOkMdScr}
            onCancelMdDelete={onCancelMdDelete}
            onCancelMdScr={onCancelMdScr}
            scrForm={scrForm}
            currentSupplier={currentSupplier}
            sources={sources}
            scrappedData={scrappedData}
            mdScrLoading={mdScrLoading}
            paginador={paginador}
        />
    }

    </>;
}

export default SuppliersPage;