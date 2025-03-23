import React from "react";
import { Tag, Flex, Button,Typography } from "antd";
import {FilePdfOutlined} from '@ant-design/icons';
import { colors } from "../colors";
const {Text} = Typography;
import { 
    CalendarBlank, 
    Eye,
    FileArrowDown,
    UserCheck,
    PencilSimpleLine,
    Trash,
 } from "@phosphor-icons/react";

 export const ColumnsSource = (data) => {
    if (!data || data.length === 0) return [];

    const columns = Object.keys(data[0]).map(key => ({
        title: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), // Formatea el título
        dataIndex: key,
        key: key,
    }));

    // Prioriza la columna 'id' si existe
    const idColumn = columns.find(col => col.dataIndex === 'id');
    const otherColumns = columns.filter(col => col.dataIndex !== 'id');

    return idColumn ? [idColumn, ...otherColumns] : columns;
};
