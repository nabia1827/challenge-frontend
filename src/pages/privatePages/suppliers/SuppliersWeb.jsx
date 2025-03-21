import React, { useState, useEffect } from "react";
import { Flex, Row, Col, Select, Button, Typography, Form, Tag, Table } from "antd";
import { colors } from "../../../utils/colors";
const { Text } = Typography;
import {
    Funnel
} from "@phosphor-icons/react";
import { enableButtonStyle, smallButtonStyle, enableModalButtonStyle } from "../../../utils/styles";
import {
    PlusOutlined
} from '@ant-design/icons';
import dayjs from 'dayjs';
import { ColumnsSuppliers } from "../../../utils/suppliers/columnsSuppliers";
import SupplierFilter from "../../../components/filters/SuppliersFilter";

function SuppliersWeb(props) {
    const { onChange, loading,filterForm,paises,handleOnFieldsChange,onClickCreate } = props;
    const columns = ColumnsSuppliers()

    const data = [
        {
            supplierId: 1,
            legalName: "Uber Company",
            tradeName: "Uber",
            taxIndentNumber: "12345678901",
            phoneNumber: "962928896",
            mailAddress: "uber@gmail.com",
            website: "https://www.uber.com/pe/es/",
            physicalAddress: "Av. Los Lirios 3456",
            countryId: 1,
            countryName: "Estados Unidos",
            annualRevenue: 123456.30,
            lastEdited: "12/03/2025 17:56",
            supplierActive: true,
        },
        {
            supplierId: 3,
            legalName: "Uber Company",
            tradeName: "Uber",
            taxIndentNumber: "12345678901",
            phoneNumber: "962928896",
            mailAddress: "uber@gmail.com",
            website: "https://www.uber.com/pe/es/",
            physicalAddress: "Av. Los Lirios 3456",
            countryId: 1,
            countryName: "Estados Unidos",
            annualRevenue: 123456.30,
            lastEdited: "12/03/2025 17:56",
            supplierActive: true,
        },
        {
            supplierId: 2,
            legalName: "Uber Company",
            tradeName: "Uber",
            taxIndentNumber: "12345678901",
            phoneNumber: "962928896",
            mailAddress: "uber@gmail.com",
            website: "https://www.uber.com/pe/es/",
            physicalAddress: "Av. Los Lirios 3456",
            countryId: 1,
            countryName: "Estados Unidos",
            annualRevenue: 123456.30,
            lastEdited: "12/03/2025 17:56",
            supplierActive: true,
        },
    ]


    return (
        <>
            <Flex vertical justify="flex-start" align="flex-start" style={{ width: "100%", minHeight: "83vh", padding: "1em", backgroundColor: colors.white }}>
                <Flex justify="space-between" align="center" style={{width:"100%"}}>
                    <Text className="qq-app-logo">Suppliers</Text>
                    <Button onClick={onClickCreate} icon={<PlusOutlined />} style={enableModalButtonStyle} type="primary" >
                        Create
                    </Button>
                </Flex>
                <br></br>
                <SupplierFilter form={filterForm} 
                paises={paises} handleOnFieldsChange={handleOnFieldsChange}></SupplierFilter>
                <br></br>
                <Table
                    style={{ width: "100%" }}
                    loading={loading}
                    rowKey="supplierId"
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        onChange,
                        total: 5,
                        pageSize: 5,
                        current: 1,
                        showSizeChanger: true,
                        showTotal: (total) => `Hay ${total} registros`,
                    }}
                    size="small"
                    components={{
                        header: {
                          cell: ({ children }) => (
                            <th style={{ background: colors.lightBlack, color: "white", padding: "10px" }}>
                              {children}
                            </th>
                          ),
                        },
                      }}

                />
            </Flex>

        </>
    );

}

export default SuppliersWeb;