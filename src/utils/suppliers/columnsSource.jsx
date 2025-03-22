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
    const columns = Object.keys(data[0]).map(key => ({
        title: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()), // Formatea el título
        dataIndex: key,
        key: key,
    }));

    return columns;
};