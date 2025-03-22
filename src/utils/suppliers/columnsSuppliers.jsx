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

export const ColumnsSuppliers = (onClickEdit,onClickSee,showMdDelete,showMdScr) => {
    const columns = [
        
        {
            title: 'Legal Name',
            dataIndex: 'legalName',
            key: 'legalName',
        },
        {
            title: 'Trade Name',
            dataIndex: 'tradeName',
            key: 'tradeName',
        },
        {
            title: 'Tax Identification Number',
            dataIndex: 'taxIndentNumber',
            key: 'taxIndentNumber',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Mail Address',
            dataIndex: 'mailAddress',
            key: 'mailAddress',
        },
        {
            title: 'Website',
            dataIndex: 'websitetxt',
            key: 'websitetxt',
            render: (_, record, index) => (
                <a href={record.website} target="_blank" rel="noopener noreferrer">{record.website}</a>
            ),
        },
        {
            title: 'Physical Address',
            dataIndex: 'physicalAddress',
            key: 'physicalAddress',
        },
        {
            title: 'Country Name',
            dataIndex: 'countryName',
            key: 'countryName',
        },
        {
            title: 'Annual Revenue',
            dataIndex: 'annualRevenueTxt',
            key: 'annualRevenueTxt',
            render: (_, record, index) => (
                <Tag color="geekblue">{record.annualRevenue.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' })}</Tag>
            ),
        },
        {
            title: 'Last Edited',
            dataIndex: 'lastEdited',
            key: 'lastEdited',
        },
        {
            title: 'Actions',
            key: 'acciones',
            render: (_, record, index) => (
                <Flex gap={"small"} justify="center" align="center">
                    <Button onClick={()=>onClickSee(record.supplierId)} type="primary" shape="circle" style={{backgroundColor:colors.lightBlack}} icon={<Eye size={20} color={colors.white} />} />
                    <Button onClick={()=>onClickEdit(record.supplierId)}  type="primary" shape="circle" style={{backgroundColor:colors.blue}} icon={<PencilSimpleLine size={20} color={colors.white} />} />
                    <Button onClick={()=>showMdScr(record)} type="primary" shape="circle" style={{backgroundColor:colors.blue}} icon={<UserCheck size={20} color={colors.white} />} />
                    <Button onClick={()=>showMdDelete(record)} type="primary" shape="circle" style={{backgroundColor:colors.red}} icon={<Trash size={20} color={colors.white} />} />
                    
                    
                </Flex>
            ),
        }
    ];
    
    return columns;
};