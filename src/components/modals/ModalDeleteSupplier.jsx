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

function ModalDeleteSupplier(props) {
    const { modalOpen, handleOk, handleCancel, name } = props;


    return (
        <>
            <Modal
                style={{ width: "40vh" }}
                open={modalOpen}
                title={<Text className="qq-app-modal-title" >Delete Supplier</Text>}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <Flex vertical justify="flex-start" align="flex-start" gap={"small"}>
                    <p>
                        {`Are you sure you want to delete ${name} from the suppliers list?`}
                    </p>
                    <Flex gap={"small"} justify="flex-end" align="center" style={{ width: "100%" }}>
                        <Button key="back" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button color="danger" variant="solid" onClick={handleOk} >
                            Delete
                        </Button>
                    </Flex>
                </Flex>

            </Modal>
        </>
    );

}

export default ModalDeleteSupplier;