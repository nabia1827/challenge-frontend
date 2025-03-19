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
import NewCategory from "../../../components/modals/NewCategory";
import EditNote from "../../../components/modals/EditNote";
import AddCategoryToNote from "../../../components/modals/AddCategoryToNote";
import { OperationType } from "../../../utils/constants";
import Note from "../../../components/cards/Note";

function NotesWeb(props) {
    const { type, title, form,onClickNote,
        mdNewCategoryOpen,onOkMdNewCategory,onCancelMdNewCategory,newCategoryForm,showMdNewCategory,
        mdEditNoteOpen,onCloseMdEditNote,editNoteForm,currentRecord,handleOnFieldsChange,
        mdAddCategoryOpen,showMdAddCategory,onOkMdAddCategory,onCancelMdAddCategory,addCategoryForm,categories,
        mdAddNoteOpen,onOkMdAddNote,onCancelMdAddNote,addNoteForm,showMdAddNote} = props;
    const notes = [
        { 
            noteId: 1, 
            noteTitle: "Nota 1", 
            noteContent: "Contenido de la nota 1", 
            noteColor: "#CAD9F8",
            noteCategories: [
                {
                    categoryId:1,
                    categoryName:"Cine"
                },
                {
                    categoryId:2,
                    categoryName:"Friends"
                }
            ],
        },
        { 
            noteId: 2, 
            noteTitle: "Nota 2", 
            noteContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
            noteColor: "#D8CAF8",
            noteCategories: [
                {
                    categoryId:1,
                    categoryName:"Trabajo"
                },
                {
                    categoryId:2,
                    categoryName:"Azure"
                }
            ],
        },
    ];
    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            label: i.toString(36) + i,
            value: i.toString(36) + i,
        });
    }

    return (
        <>
            <Flex vertical justify="flex-start" align="flex-start" style={{ width: "100%", minHeight: "83vh", padding: "1em", backgroundColor: colors.white }}>
                <Text className="qq-app-logo">{title}</Text>
                <Flex justify="space-between" align="center" style={{ width: "100%" }}>
                    <Row style={{ width: "480px" }}>
                        <Col xs={20} sm={20} md={22} lg={24} xl={24}>
                            <Form
                                form={form}
                                style={{ width: "100%" }}
                                labelWrap={false}
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
                                <Flex gap={"small"} justify="flex-start" align="center" style={{ width: "100%" }}>
                                    <Funnel size={20} color={colors.lightBlack} />
                                    <Text className="qq-app-subtitle" style={{ width: "80px" }}>Filters</Text>
                                    <Form.Item
                                        style={{ width: "100%", marginBottom: "0" }}
                                        name='categoryId'
                                    >
                                        <Select
                                            mode="multiple"
                                            allowClear
                                            style={{
                                                width: '100%',
                                            }}
                                            placeholder="Please select"
                                            defaultValue={['a10', 'c12']}
                                            options={options}
                                        />
                                    </Form.Item>
                                    <Button
                                        icon={<PlusOutlined />}
                                        shape="circle"
                                        type="text"
                                        onClick={showMdNewCategory}
                                    >
                                    </Button>


                                </Flex>

                            </Form>
                        </Col>

                    </Row>


                    <Button onClick={showMdAddNote} style={smallButtonStyle} icon={<PlusOutlined />}>Add Note</Button>
                </Flex>
                <div className="notes-grid">
                    {notes.map((note) => (
                        <Note note={note} onClickNote={onClickNote}></Note>
                    ))}
                </div>

            </Flex>
            <NewCategory
                modalOpen={mdNewCategoryOpen}
                handleOk = {onOkMdNewCategory}
                handleCancel ={onCancelMdNewCategory}
                form= {newCategoryForm}
            >

            </NewCategory>

            <EditNote 
            modalOpen = {mdEditNoteOpen}
            handleOk = {onCloseMdEditNote}
            handleCancel = {onCloseMdEditNote}
            form = {editNoteForm}
            record = {currentRecord}
            
            addCategory = {showMdAddCategory}
            type = {OperationType.EDIT}
            >

            </EditNote>

            <EditNote 
            modalOpen = {mdAddNoteOpen}
            handleOk = {onOkMdAddNote}
            handleCancel = {onCancelMdAddNote}
            form = {addNoteForm}
            record = {null}
            addCategory = {showMdAddCategory}
            type = {OperationType.CREATE}
            >
            </EditNote>


            <AddCategoryToNote
            modalOpen = {mdAddCategoryOpen}
            handleOk={onOkMdAddCategory}
            handleCancel = {onCancelMdAddCategory}
            form = {addCategoryForm}
            categories = {categories}
            >

            </AddCategoryToNote>
        </>
    );

}

export default NotesWeb;

/*


*/