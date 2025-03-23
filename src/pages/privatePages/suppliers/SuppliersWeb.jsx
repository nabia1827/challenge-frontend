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
import ModalDeleteSupplier from "../../../components/modals/ModalDeleteSupplier";
import ModalScreening from "../../../components/modals/ModalScreening";

function SuppliersWeb(props) {
    const { onChange, loading, filterForm, countries, handleOnFieldsChange, scrappedData,
        onClickCreate, onClickEdit, onClickSee, paginador,
        mdDeleteOpen, mdScrOpen, showMdDelete, showMdScr, onOkMdDelete, onOkMdScr,
        onCancelMdDelete, onCancelMdScr, scrForm, currentSupplier, sources, mdScrLoading } = props;
    const columns = ColumnsSuppliers(onClickEdit, onClickSee, showMdDelete, showMdScr)


    return (
        <>
            <Flex vertical justify="flex-start" align="flex-start" style={{ width: "100%", minHeight: "83vh", padding: "1em", backgroundColor: colors.white }}>
                <Flex justify="space-between" align="center" style={{ width: "100%" }}>
                    <Text className="qq-app-logo">Suppliers</Text>
                    <Button onClick={onClickCreate} icon={<PlusOutlined />} style={enableModalButtonStyle} type="primary" >
                        Create
                    </Button>
                </Flex>
                <br></br>
                <SupplierFilter form={filterForm}
                    countries={countries} handleOnFieldsChange={handleOnFieldsChange}></SupplierFilter>
                <br></br>
                <Table
                    style={{ width: "100%" }}
                    loading={loading}
                    rowKey="supplierId"
                    columns={columns}
                    dataSource={paginador?.data}
                    pagination={{
                        onChange,
                        total: paginador?.count,
                        pageSize: paginador?.pageSize,
                        current: paginador?.pageIndex,
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
            <ModalDeleteSupplier
                modalOpen={mdDeleteOpen}
                handleOk={onOkMdDelete}
                handleCancel={onCancelMdDelete}
                name={currentSupplier?.tradeName ?? ""}
            >

            </ModalDeleteSupplier>
            <ModalScreening
                modalOpen={mdScrOpen}
                handleOk={onOkMdScr}
                handleCancel={onCancelMdScr}
                form={scrForm}
                sources={sources}
                data={scrappedData}
                loading={mdScrLoading}
            >

            </ModalScreening>

        </>
    );

}

export default SuppliersWeb;