import React, { useState, useEffect } from "react";
import { Flex, Typography, Layout, Menu, Drawer, Grid } from "antd";
const { Text } = Typography;
const { Header, Footer, Sider, Content } = Layout;
import { siderStyle } from "../utils/styles";
import { useNavigate } from "react-router-dom";
import { colors } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../store/actions/auth/authActionAsync";

const { useBreakpoint } = Grid;
import {
    Feather,
    Funnel,
    SignOut,
    Bell,
    FileText,
    CalendarBlank,
    ChartBar,
    HandArrowDown,
    EnvelopeSimple,
    MicrosoftExcelLogo
} from "@phosphor-icons/react";
import { getMenuItemsForUser } from "../utils/functions";

function SiderLayout(props) {
    const { collapsed, setCollapsed, onCollapse } = props;
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const screens = useBreakpoint();
    //console.log("BREAKPOINT!!!", screens);
    const { profileId } = useSelector((state) => state.auth.user);
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (profileId) {
            const its = getMenuItemsForUser(profileId);
            //console.log("its ", its);
            setItems(its);
        }
    }, [profileId]);

    const logout = () => {
        dispatch(startLogout());
    };



    const handleMenuClick = (e) => {
        //console.log(e.key)
        if (e.key == 'logout') {
            logout()
        } else {
            const selectedItem = items.find(item => item.key === e.key);
            //console.log("Selected Item: ", selectedItem)
            if (selectedItem && selectedItem.key) {

                navigate(selectedItem.key);
            }
        }
    };

    return (
        <>
            {!screens.md && !screens.xl && !screens.xxl ? (
                <Drawer
                    placement="left"
                    onClose={() => setCollapsed(false)}
                    width={"250px"}
                    closable={false}
                    open={collapsed}
                    bodyStyle={{ backgroundColor: "white", padding: "0" }}
                >
                    <Flex vertical gap={"middle"} justify="flex-start" align="center" style={{ width: "100%", padding: "4.0em 0.0em" }}>


                        <Menu onClick={handleMenuClick} style={{ backgroundColor: 'transparent', height: "100%" }} theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} >

                        </Menu>
                    </Flex>
                </Drawer>
            ) : (
                <Sider breakpoint="md" width="240px" style={siderStyle} collapsedWidth="75px" collapsible collapsed={collapsed} trigger={null}>
                    <Menu onClick={handleMenuClick} style={{ backgroundColor: 'transparent', height: "100%" }} theme="light" mode="inline" defaultSelectedKeys={['1']} items={items} >

                    </Menu>


                </Sider>
            )}

        </>
    );
}

export default SiderLayout;