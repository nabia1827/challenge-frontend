import React, { useState, useEffect } from "react";
import { Flex, Row, Col, Select, Button, Typography, Form, Tag, Input, Spin, InputNumber } from "antd";
import { colors } from "../../../utils/colors";
const { Text } = Typography;
import {
    Funnel
} from "@phosphor-icons/react";
import { enableButtonStyle, smallButtonStyle, enableModalButtonStyle } from "../../../utils/styles";
import {
    ArrowLeftOutlined, CheckOutlined
} from '@ant-design/icons';
import { Titles, SupplierType } from "../../../utils/constants";

function SupplierWeb(props) {
    const { form, handleSave, onBack, type, countries, loading } = props;




    return (
        <>
            <Spin spinning={loading} style={{ width: "100%", minHeight: "60vh" }}>
                <Flex vertical justify="flex-start" align="flex-start" style={{ width: "100%", minHeight: "83vh", padding: "24px", backgroundColor: colors.white }}>
                    <Flex justify="flex-start" align="center" gap={"small"}>
                        <Button onClick={onBack} type="text" shape="circle" icon={<ArrowLeftOutlined />} />
                        <Text className="qq-app-logo">{Titles[type]} Supplier</Text>
                    </Flex>
                    <br></br>
                    <Flex style={{ width: "100%", padding: "9px" }}>
                        <Form
                            form={form}
                            disabled={type == SupplierType.SEE}
                            onFinish={handleSave}
                            style={{ width: "100%" }}
                            labelWrap={true}
                            labelCol={{
                                xxl: 6,
                                xl: 6,
                                lg: 6,
                                md: 24,
                                sm: 24,
                                xs: 24,
                            }}
                            wrapperCol={{
                                xxl: 18,
                                xl: 18,
                                lg: 18,
                                md: 24,
                                sm: 24,
                                xs: 24,
                            }}
                        >
                            <Row gutter={[12, 36]} justify={"flex-start"} align={"flex-start"} style={{ width: "100%" }}>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                                    <Form.Item

                                        style={{ width: "100%", marginBottom: "0", padding: "0" }}
                                        label={<Text className="qq-app-modal-title" >Legal Name</Text>}
                                        name='legalName'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                        ]}
                                    >
                                        <Input maxLength={200} showCount placeholder="Write a name" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>


                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Trade Name</Text>}
                                        name='tradeName'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                        ]}
                                    >
                                        <Input maxLength={200} showCount placeholder="Write a name" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>


                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Tax Identification </Text>}
                                        name='taxIdentNumber'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                            {
                                                min: 11,
                                                message: 'This field must have 11 characters',
                                            },

                                        ]}
                                    >
                                        <Input maxLength={11} showCount placeholder="Tax Identification" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>

                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Cell Phone</Text>}
                                        name='phone'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Cellphone" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>

                                </Col>


                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Email</Text>}
                                        name='email'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                            {
                                                type: 'email',
                                                message: 'Not a valid email.'
                                            },
                                        ]}
                                    >
                                        <Input placeholder="someone@example.com" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>
                                </Col>


                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Pyshical Address</Text>}
                                        name='address'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                        ]}
                                    >
                                        <Input maxLength={250} showCount placeholder="Address" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ alignItems: "center" }}>
                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Country</Text>}
                                        name='countryId'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Select one country.',
                                            },
                                        ]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select a country"
                                            optionFilterProp="label"
                                            style={{ width: "100%", height: "36px", textAlign: "left" }}
                                            options={(countries || []).map((c) => ({
                                                value: c.countryId,
                                                label: c.countryName,
                                            }))}
                                        />
                                    </Form.Item>

                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Annual Revenue</Text>}
                                        name='revenue'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                        ]}
                                    >
                                        <InputNumber
                                            style={{ width: "100%", height: "36px" }}
                                            min={0}
                                            placeholder="0000.00"
                                            formatter={(value) =>
                                                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",") // Formateo con comas
                                            }
                                            parser={(value) => value.replace(/\$\s?|(,*)/g, "")} // Elimina símbolos antes de procesar el número
                                        />
                                        
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} >

                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        label={<Text className="qq-app-modal-title" >Website</Text>}
                                        name='website'
                                        rules={[
                                            {
                                                required: true,
                                                message: 'This field is required.',
                                            },
                                            {
                                                type: 'url',
                                                message: 'Not a valid URL.'
                                            },
                                        ]}
                                    >
                                        <Input placeholder="https://website.com" style={{ width: "100%", height: "36px" }} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <br></br>
                            {type !== SupplierType.SEE && (
                                <Flex style={{ width: "100%" }} justify="flex-end" align="center">
                                    <Button onClick={handleSave} icon={<CheckOutlined />} style={enableModalButtonStyle} key="submit" type="primary" >
                                        Save
                                    </Button>
                                </Flex>
                            )

                            }

                        </Form>
                    </Flex>



                </Flex>
            </Spin>


        </>
    );

}

export default SupplierWeb;