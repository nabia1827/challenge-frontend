import React, { useEffect, useState } from "react";
import { Flex, Modal, Form, Button, Select, Row, Col, Input, Typography, Switch, Table } from "antd";
import { motion } from "framer-motion";
import { enableButtonStyle, hoverButtonStyle, enableModalButtonStyle } from "../../utils/styles";
import {
    SearchOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../utils/colors";
const { Text } = Typography
const { TextArea } = Input;
import { ColumnsSource } from "../../utils/suppliers/columnsSource";

function ModalScreening(props) {
    const { modalOpen, handleOk, handleCancel, form, sources, data,loading } = props;

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (data && data.length>0) {
            setColumns(ColumnsSource(data))
        }
    }, [data]);

    const onChange = () =>{

    }

    return (
        <>
            <Modal
                width={1000}
                open={modalOpen}
                title={<Text className="qq-app-modal-title" >Screening</Text>}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    form={form}
                    onFinish={handleOk}
                    style={{ width: "100%" }}
                    labelWrap={true}
                    labelCol={{
                        xxl: 24,
                        xl: 24,
                        lg: 24,
                        md: 24,
                        sm: 24,
                        xs: 24,
                    }}
                    wrapperCol={{
                        xxl: 24,
                        xl: 24,
                        lg: 24,
                        md: 24,
                        sm: 24,
                        xs: 24,
                    }}
                >

                    <Flex vertical justify="flex-start" align="center" gap={"small"}>
                        <Row gutter={[4, 16]} align={"flex-end"} justify={"flex-end"} style={{ width: "100%", padding: "1.0em" }}>
                            <Col xs={24} sm={24} md={24} lg={10} xl={10} style={{ alignItems: "center" }}>
                                <Form.Item
                                    style={{ width: "100%", marginBottom: "0" }}
                                    label={<Text className="qq-app-modal-title" >Legal Name</Text>}
                                    name='legalName'

                                >
                                    <Input placeholder="Trade name..."></Input>

                                </Form.Item>

                            </Col>

                            <Col xs={20} sm={20} md={20} lg={10} xl={10}>
                                <Form.Item
                                    style={{ width: "100%", marginBottom: "0" }}
                                    label={<Text className="qq-app-modal-title" >Information Source</Text>}
                                    name='sourceId'

                                >
                                    <Select
                                        showSearch
                                        placeholder="Select a source"
                                        optionFilterProp="label"
                                        style={{ width: "100%" }}
                                        options={(sources || []).map((s) => ({
                                            value: s.sourceId,
                                            label: s.sourceName,
                                        }))}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} style={{ justifyItems: "flex-end", alignItems: "flex-end", alignContent: "flex-end", justifyContent: "flex-end" }}>
                                <Button onClick={handleOk} type="primary" shape="circle" style={{ backgroundColor: colors.blue }} icon={<SearchOutlined />} />
                            </Col>

                        </Row>
                        <Table
                            style={{ width: "100%" }}
                            loading={loading}
                            rowKey="id"
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
                </Form>





            </Modal>
        </>
    );

}

export default ModalScreening;