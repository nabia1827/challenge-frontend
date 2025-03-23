import React, { useState } from "react";
import { Flex, Form, Typography, Layout, Menu, Breadcrumb, Button, Row, Col, Collapse, Input, Select, DatePicker, Table } from "antd";
const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Header, Footer, Sider, Content } = Layout;
import { colors } from "../../utils/colors";
import { enableModalButtonStyle } from "../../utils/styles";
import {
    Lightning,
    Funnel,
} from "@phosphor-icons/react";


function SupplierFilter(props) {
    const { countries, form, onReset, handleOnFieldsChange } = props;

    return (
        <>
            <Collapse
                style={{ width: "100%" }}
                items={[
                    {
                        key: '1',
                        label:
                            <Flex gap={"small"} justify="flex-start" align="center">
                                <Funnel size={24} color={colors.lightBlack} />
                                <Text className="app-content-filter">Filter</Text>
                            </Flex>,
                        children:
                            <>
                                <Form
                                    form={form}
                                    onFieldsChange={handleOnFieldsChange}
                                    style={{ width: "100%" }}
                                    labelWrap={false}
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
                                    <Row gutter={[8, 8]} justify={"start"} align={"bottom"} style={{ width: "100%" }}>
                                        <Col xs={24} sm={24} md={12} lg={8} xl={4}>
                                            <Form.Item label={<Text>Legal Name: </Text>} name='legalName'>
                                                <Input placeholder="Legal Name" size="large" style={{ width: "100%", height: "36px" }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={8} xl={4}>
                                            <Form.Item label={<Text>Trade Name: </Text>} name='tradeName'>
                                                <Input placeholder="Trade Name" size="large" style={{ width: "100%", height: "36px" }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={8} xl={4}>
                                            <Form.Item label={<Text>Tax Identification Number: </Text>} name='taxIdentNumber'>
                                                <Input placeholder="Tax Identification Number" size="large" style={{ width: "100%", height: "36px" }} />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} sm={24} md={12} lg={8} xl={4}>
                                            <Form.Item label={<Text> Country: </Text>} name='countryId'>

                                                <Select
                                                    showSearch
                                                    allowClear
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

                                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                                            <Form.Item label={<Text> Last Edited: </Text>} name='dateRange'>
                                                <RangePicker style={{ width: "100%", height: "36px" }} />
                                            </Form.Item>

                                        </Col>

                                        <Col xs={24} sm={24} md={4} lg={4} xl={4}>

                                            <Form.Item >
                                                <Button onClick={onReset} type="primary" style={{ backgroundColor: colors.lightBlack, width: "100%", height: "36px" }}>
                                                    Clean
                                                </Button>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>

                            </>,
                        showArrow: false,
                    },
                ]}
            />
        </>
    );
}
export default SupplierFilter;