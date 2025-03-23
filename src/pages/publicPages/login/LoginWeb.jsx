import React, { useState, useEffect } from "react";
import { Flex, Button, Input, Typography, ConfigProvider, Switch } from "antd";
import { colors } from "../../../utils/colors";
import { motion } from "framer-motion";

import { UsersThree, User, LockKey, WarningCircle } from "@phosphor-icons/react";
import { enableButtonStyle, hoverButtonStyle } from "../../../utils/styles";


const { Text } = Typography

function LoginWeb(props) {
    const { username, password, onLogin, onChangeUsername, onChangePassword, onSwitchRemember,
        textError, status,loading
    } = props;
    const [trail, setTrail] = useState([]);


    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const newTrail = { x: clientX, y: clientY, id: Math.random() };
        setTrail((prevTrail) => [...prevTrail, newTrail].slice(-10)); // Keeps only the last 10 positions
    };

    return (
        <>
            <Flex justify="center" align="center" style={{ width: "100%", height: "100vh" }}>
                <Flex vertical justify="center" align="center" style={{ width: "50%", height: "100vh", backgroundColor: colors.white }}>
                    <Flex gap={"large"} vertical justify="center" align="flex-start" style={{ width: "60%" }}>

                        <Flex gap={"small"} vertical justify="center" align="flex-start" style={{ width: "100%" }}>
                            <Text className="sie-login-title">Welcome</Text>
                            <Text className="sie-login-subtitle">Enter your username and password to log in.</Text>
                        </Flex>
                        <Flex gap={"small"} vertical justify="center" align="flex-start" style={{ width: "100%" }}>
                            <Text>Username:</Text>
                            <Input status={status} placeholder="User" size="large" onChange={onChangeUsername}
                                prefix={<User size={24} color={colors.gray} />} style={{ width: "100%" }} />
                        </Flex>

                        <Flex gap={"small"} vertical justify="center" align="flex-start" style={{ width: "100%" }}>
                            <Text>Password:</Text>
                            <Input.Password status={status} placeholder="Password" size="large" onChange={onChangePassword}
                                prefix={<LockKey size={24} color={colors.gray} />} style={{ width: "100%" }} />
                        </Flex>
                        {
                            textError !== '' && (
                                <Flex gap={"small"} justify="flex-start" align="center" style={{ width: "100%" }}>
                                    <WarningCircle size={24} color={colors.red} />
                                    <Text>{textError}</Text>
                                </Flex>
                            )
                        }

                        <br></br>
                        <Button style={enableButtonStyle} key="submit" type="primary" loading={loading} onClick={() => onLogin(username, password)}>
                            Log in
                        </Button>
                        


                    </Flex>



                </Flex>
                <Flex onMouseMove={handleMouseMove} vertical justify="center" align="center" style={{ width: "50%", height: "100vh", background: colors.gradient, overflow: "hidden" }}>
                    <Flex gap={"middle"} justify="center" align="center" style={{ width: "100%" }}>
                        <Flex justify="center" align="center" style={{ width: "70px", height: "70px", backgroundColor: "white", borderRadius: "5.0em" }}>
                            <UsersThree size={40} weight="fill" color={colors.middleBlue} />
                        </Flex>
                        <Text className="sie-logo">SafeSupply</Text>
                    </Flex>
                    {trail.map((point) => (
                        <motion.div
                            key={point.id}
                            className="trail-dot"
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                            style={{ left: point.x, top: point.y }}
                        />
                    ))}

                </Flex>
            </Flex>
        </>
    );

}

export default LoginWeb;