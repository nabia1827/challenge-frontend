import React, { useState } from "react";
import { Flex, Typography, Layout, FloatButton, Select, DatePicker, Table, Grid } from "antd";
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
import { contentStyle, } from "../utils/styles";
import {
    List
} from "@phosphor-icons/react";
import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import { MenuOutlined } from '@ant-design/icons';

function BaseLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false)
    const screens = useBreakpoint();

    const onCollapse = (collapsed, type) => {
        setCollapsed(collapsed);
    }
    return (
        <>
            <Layout style={{ width: "100%", height: "100vh", backgroundColor: "white" }}>
                <HeaderLayout collapsed={collapsed} setCollapsed={setCollapsed}></HeaderLayout>
                <Layout>
                    <SiderLayout collapsed={collapsed} setCollapsed={setCollapsed} onCollapse={onCollapse}></SiderLayout>
                    <Content style={contentStyle}>
                        {children}
                    </Content>
                </Layout>
                

                

            </Layout>
        </>
    );
}

export default BaseLayout;