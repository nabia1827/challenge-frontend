import React, { useEffect, useState } from "react";
import { Flex, Modal, Form, Button, Select, Row, Col, Input, Typography, Switch } from "antd";
import { motion } from "framer-motion";
import { enableButtonStyle, hoverButtonStyle, enableModalButtonStyle } from "../../utils/styles";
import {
    PlusOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
const { Text } = Typography
const { TextArea } = Input;

function AddCategoryToNote(props) {
    const { modalOpen, handleOk, handleCancel, form, categories } = props;


    return (
        <>
            <Modal
                style={{ width: "40vh" }}
                open={modalOpen}
                title={<Text className="qq-app-modal-title" >Add Category To Note</Text>}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Form
                    form={form}
                    onFinish={handleOk}
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
                    <Row gutter={[4, 16]} align={"middle"} justify={"flex-end"} style={{ width: "100%", padding: "1.0em" }}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ alignItems: "center" }}>
                            <Form.Item
                                style={{ width: "100%", marginBottom: "0" }}
                                label={<Text className="qq-app-modal-title" >Category</Text>}
                                name='categoryId'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Select one',
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select a person"
                                    optionFilterProp="label"                                   
                                    style={{ width: "100%", height: "36px" }}
                                    options={(categories || []).map((c) => ({
                                        value: c.categoryId,
                                        label: c.categoryName,
                                    }))}
                                />
                            </Form.Item>

                        </Col>


                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Flex gap={"small"} justify="flex-end" align="center" style={{ width: "100%" }}>
                                <Button key="back" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Form.Item style={{ marginBottom: "0" }}>
                                    <Button style={enableModalButtonStyle} htmlType="submit" key="submit" type="primary" >
                                        Add
                                    </Button>
                                </Form.Item>
                            </Flex>
                        </Col>

                    </Row>
                </Form>





            </Modal>
        </>
    );

}

export default AddCategoryToNote;