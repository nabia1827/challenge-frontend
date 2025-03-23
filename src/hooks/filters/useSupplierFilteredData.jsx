import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Form } from "antd";

const initialPaginadorState = {
    pageCount: 0,
    pageIndex: 0,
    pageSize: 0,
    count: 0,
    message: "",
    isSuccess: false,
    data: [],
};

const initialCommonRequestState = {
    pagina: 1,
    cantidadRegistrosPorPagina: 5,
    legalName: "",
    tradeName: "",
    taxIdentNumber: "",
    countryId: 0,
    dateRange: {
        initDate: "",
        endDate: "",
    },

};

function useSupplierFilteredData(
    customApiCall,
    initialRequestState = initialCommonRequestState
) {
    const [request, setRequest] = useState(initialRequestState);
    const [paginador, setPaginador] = useState(initialPaginadorState);
    const [loading, setLoading] = useState(false);

    const { usuId } = useSelector((state) => state.auth.user);


    useEffect(() => {
        (async () => {
            setLoading(true);


            const filteredRequest = Object.fromEntries(
                Object.entries(request).filter(([key, value]) => {
                    if (key === "dateRange") {
                        return value.initDate !== "" && value.endDate !== "";
                    } else {
                        return value !== "" && value !== null && value !== 0;
                    }
                })
            );

            if (filteredRequest.dateRange) {
                const { initDate, endDate } = filteredRequest.dateRange;
                filteredRequest.initDate = initDate;
                filteredRequest.endDate = endDate;
                delete filteredRequest.dateRange;
            }




            try {
                const response = await customApiCall(filteredRequest);
                setPaginador(response);
            } catch (error) {
                // Handle error as needed
            } finally {
                setLoading(false);
            }
        })();
    }, [request]);

    const reloadData = async () => {
        setLoading(true);

        const filteredRequest = Object.fromEntries(
            Object.entries(request).filter(([key, value]) => {
                if (key === "dateRange") {
                    return value.initDate !== "" && value.endDate !== "";
                } else {
                    return value !== "" && value !== null && value !== 0;
                }
            })
        );

        if (filteredRequest.dateRange) {
            const { initDate, endDate } = filteredRequest.dateRange;
            filteredRequest.initDate = initDate;
            filteredRequest.endDate = endDate;
            delete filteredRequest.dateRange;
        }
        try {
            const response = await customApiCall(filteredRequest);
            setPaginador(response);
        } catch (error) {
            // Handle error as needed
        } finally {
            setLoading(false);
        }
    };

    const onChange = (pageNumber, pageSize) => {
        setRequest((prevState) => ({
            ...prevState,
            pagina: pageNumber,
            cantidadRegistrosPorPagina: pageSize,
        }));
    };

    // Logic to handle filter's fields change
    const [filterForm] = Form.useForm();

    const onReset = () => {
        setRequest((prevState) => ({
            ...prevState,
            legalName: "",
            tradeName: "",
            taxIdentNumber: "",
            countryId: null,
            dateRange: {
                initDate: "",
                endDate: "",
            },
        }));
        filterForm.resetFields();
    };

    return {
        paginador,
        loading,
        onChange,
        request,
        setRequest,
        onReset,
        filterForm,
        reloadData,
        usuId
    };
}

export default useSupplierFilteredData;
