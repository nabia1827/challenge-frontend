import React, { useState } from "react";
import { Flex, Typography, Layout, Grid, Breadcrumb, Button, Tooltip, Avatar, Badge, Collapse, Input, Select, DatePicker, Table } from "antd";
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
import { headerStyle, } from "../utils/styles";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { colors } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';
import {
    Lightning,
    Funnel,
    Bell,
    Feather,
    CalendarBlank,
    ChartBar,
    HandArrowDown,
    EnvelopeSimple,
    MicrosoftExcelLogo
} from "@phosphor-icons/react";

const { useBreakpoint } = Grid;

function HeaderLayout(props) {
    const {collapsed, setCollapsed} = props;
    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();
    const location = useLocation();
    const screens = useBreakpoint();
    const dispatch = useDispatch();
    const pathname = location.pathname

    const onBack = () => {

    }



    return (
        <>
            <Header style={headerStyle}>
                <Flex justify="space-between" align="flex-start" style={{ background: colors.white, width: "100%", height: "98%", borderRadius: "0.8em", }}>
                    <Flex gap={"small"} justify="flex-start" align="center" style={{ height: "100%" }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <Flex justify="center" align="center" style={{ width: "40px", height: "40px", background: colors.gradient, borderRadius: "5.0em" }}>
                            <Feather size={24} weight="fill" color={colors.white} />

                        </Flex>
                        <Text className="qq-app-logo">QuickQuill</Text>
                    </Flex>
                    <Flex gap={"small"} justify="flex-end" align="center" style={{ height: "100%" }}>



                        {screens.lg && (
                            <Flex vertical justify="flex-start" align="flex-end">
                                <Text className="qq-app-header-user">{`${user.userFirstName} ${user.userLastName}`}</Text>
                                <Text className="qq-app-header-rol">{`${"User"}`}</Text>
                            </Flex>
                        )

                        }
                        {false ? (
                            <Avatar style={{ border: "2px solid white" }} size={36} src={<img src={"URL"} alt="avatar" />} />
                        ) : (
                            <Avatar style={{ backgroundColor: colors.lightBlack, color: 'white' }}>{user.userFirstName[0]}</Avatar>
                        )

                        }




                    </Flex>
                </Flex>

            </Header>
        </>
    );
}

export default HeaderLayout;
