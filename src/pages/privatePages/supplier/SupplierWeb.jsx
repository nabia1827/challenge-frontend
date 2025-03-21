import React,{useState,useEffect} from "react";
import { Flex, Row, Col, Select, Button, Typography, Form,Tag } from "antd";
import { colors } from "../../../utils/colors";
const { Text } = Typography;
import {
    Funnel
} from "@phosphor-icons/react";
import { enableButtonStyle, smallButtonStyle } from "../../../utils/styles";
import {
    PlusOutlined
} from '@ant-design/icons';


function SupplierWeb(props){
    const {a} = props;

    

    return (
        <>
            <Flex vertical justify="flex-start" align="flex-start" style={{ width: "100%", minHeight: "83vh", padding: "1em", backgroundColor: colors.white }}>
                <Text className="qq-app-logo">Create</Text>
                

            </Flex>
            
        </>
    );

}

export default SupplierWeb;