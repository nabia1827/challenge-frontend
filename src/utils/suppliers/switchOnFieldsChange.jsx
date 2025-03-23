import React from "react";
import { message, Modal } from "antd";
import { EditFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";


const { confirm } = Modal;

export const switchOnFieldsChange = (campo, changeFields, setRequest) => {
    switch (campo) {
        case "legalName":
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
                legalName: changeFields[0].value,
            }));
            break;
        case "tradeName":
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
                tradeName: changeFields[0].value,
            }));
            break;
        case "taxIdentNumber":
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
                taxIdentNumber: changeFields[0].value,
            }));
            break;
        case "countryId":
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
                countryId: changeFields[0].value,
            }));
            break;
        case "dateRange":
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
                dateRange: {
                    initDate: changeFields[0].value
                        ? dayjs(changeFields[0].value[0]).format("YYYY-MM-DD")
                        : "", 
                        endDate: changeFields[0].value
                        ? dayjs(changeFields[0].value[1]).format("YYYY-MM-DD")
                        : "", 
                },
            }));
            break;

        default:
            setRequest((prev) => ({
                ...prev,
                pageNumber: 1,
            }));
    }
};





