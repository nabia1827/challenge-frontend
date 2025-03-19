import React, { useEffect, useState } from "react";
import { Flex, Modal, Form, Button, Select, Row, Col, Input, Typography, ConfigProvider, Tag } from "antd";
import { motion } from "framer-motion";
import { enableButtonStyle, hoverButtonStyle, enableModalButtonStyle } from "../../utils/styles";
import {
    BgColorsOutlined,
    InboxOutlined,
    DeleteOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { OperationType } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
const { Text } = Typography
const { TextArea } = Input;

function EditNote(props) {
    const { modalOpen, handleOk, handleCancel, form, record, addCategory, type } = props;

    useEffect(() => {
        if (record && type == OperationType.EDIT) {
            form.setFieldsValue({
                noteTitle: record.noteTitle,
                noteContent: record.noteContent,
            });
        }
    }, [record]);


    return (
        <>
            <ConfigProvider
                theme={{

                    components: {
                        Modal: {
                            contentBg: record ? record.noteColor : "#CAD9F8",
                        },
                        Input: {
                            colorTextPlaceholder: "#2D3748"
                        }

                    },
                }}
            >
                <Modal
                    style={{ width: "40vh" }}
                    open={modalOpen}

                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={false}
                    closeIcon={false}
                >
                    <Form
                        form={form}
                        onFinish={handleOk}
                        style={{ width: "100%" }}
                        labelWrap={true}
                        labelCol={{
                            xxl: 0,
                            xl: 0,
                            lg: 0,
                            md: 0,
                            sm: 0,
                            xs: 0,
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
                        <Row gutter={[4, 16]} align={"middle"} justify={"flex-end"} style={{ width: "100%", padding: "1.0em" }}>

                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ alignItems: "center" }}>

                                <Flex justify="space-between" align="center" style={{ width: "100%" }}>
                                    <Form.Item
                                        style={{ marginBottom: "0" }}
                                        name='noteTitle'
                                    >
                                        <Input placeholder="Title" variant="borderless" className="qq-app-note-title"  ></Input>
                                    </Form.Item>
                                    <Flex justify="flex-end" align="center">
                                        <Button size="large" icon={<BgColorsOutlined />} type="text" shape="circle" />
                                        <Button size="large" icon={<InboxOutlined />} type="text" shape="circle" />
                                        <Button size="large" icon={<DeleteOutlined />} type="text" shape="circle" />
                                    </Flex>
                                </Flex>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ alignItems: "center" }}>
                                <Flex gap="4px 0" wrap style={{ padding: "0px 10px" }}>
                                    {record?.noteCategories?.map((c) => (
                                        <Tag key={c.categoryId} bordered={false} closable>{c.categoryName}</Tag>
                                    ))
                                    }
                                    <Button
                                        icon={<PlusOutlined />}
                                        shape="circle"
                                        type="text"
                                        size="small"
                                        onClick={addCategory}
                                    >
                                    </Button>
                                </Flex>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ alignItems: "center" }}>
                                <Form.Item
                                    style={{ width: "100%", marginBottom: "0" }}
                                    name='noteContent'
                                >
                                    <TextArea
                                        autoSize={{ minRows: 4, maxRows: 10 }}
                                        variant="borderless"
                                        placeholder="Content..."
                                        style={{ width: "100%" }}
                                    >

                                    </TextArea>
                                </Form.Item>

                            </Col>


                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                <Flex gap={"small"} justify="flex-end" align="center" style={{ width: "100%" }}>
                                    {type == OperationType.CREATE && (
                                        <Button key="back" type="text" onClick={handleCancel}>
                                            Cancel
                                        </Button>
                                    )

                                    }

                                    <Form.Item style={{ marginBottom: "0" }}>
                                        <Button htmlType="submit" key="submit" type="text" >
                                            {type == OperationType.CREATE ? "Save" : "Close"}
                                        </Button>
                                    </Form.Item>
                                </Flex>
                            </Col>

                        </Row>
                    </Form>





                </Modal>
            </ConfigProvider>

        </>
    );

}

export default EditNote;