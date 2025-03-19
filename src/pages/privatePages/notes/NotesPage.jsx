import React, { useState, useEffect } from "react";
import { Flex, Grid,Form } from "antd";
import NotesWeb from "./NotesWeb";
import NotesMobile from "./NotesMobile";
import { NoteType, Titles } from "../../../utils/constants";

const { useBreakpoint } = Grid;

function NotesPage(props) {
    const { type } = props;
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;
    const [form] = Form.useForm();
    //Category
    const categories = [
        {
            categoryId:1,
            categoryName:"Personal",
        },
        {
            categoryId:2,
            categoryName:"Trabajo",
        },
    ]

    //Modal New Category
    const [mdNewCategoryLoading, setMdNewCategoryLoading] = useState(false);
    const [mdNewCategoryOpen, setMdNewCategoryOpen] = useState(false);
    const [newCategoryForm] = Form.useForm();

    const showMdNewCategory = () => {
        setMdNewCategoryOpen(true);
    };

    const onOkMdNewCategory = () => {
        setMdNewCategoryOpen(false);
    };
    const onCancelMdNewCategory = () => {
        setMdNewCategoryOpen(false);
    };

    // Modal Edit Note
    const [mdEditNoteLoading, setMdEditNoteLoading] = useState(false);
    const [mdEditNoteOpen, setMdEditNoteOpen] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);
    const [editNoteForm] = Form.useForm();

    const onClickNote = (record) =>{
        setCurrentRecord(record)
    }

    useEffect(() => {
            if (currentRecord) {
                setMdEditNoteOpen(true);
            }
    }, [currentRecord]);
        
    

    const onCloseMdEditNote = () => {
        setMdEditNoteOpen(false);
    };

    const handleOnFieldsChange = () =>{

    }

    // Modal Add category to note
    const [mdAddCategoryLoading, setMdAddCategoryLoading] = useState(false);
    const [mdAddCategoryOpen, setMdAddCategoryOpen] = useState(false);
    const [addCategoryForm] = Form.useForm();

    const showMdAddCategory = () => {
        setMdAddCategoryOpen(true);
    };

    const onOkMdAddCategory = () => {
        setMdAddCategoryOpen(false);
    };
    const onCancelMdAddCategory = () => {
        setMdAddCategoryOpen(false);
    };


    // Modal Add note
    const [mdAddNoteLoading, setMdAddNoteLoading] = useState(false);
    const [mdAddNoteOpen, setMdAddNoteOpen] = useState(false);
    const [addNoteForm] = Form.useForm();

    const showMdAddNote = () => {
        setMdAddNoteOpen(true);
    };

    const onOkMdAddNote = () => {
        setMdAddNoteOpen(false);
    };
    const onCancelMdAddNote = () => {
        setMdAddNoteOpen(false);
    };
    

    return <>{isXsScreen ?
        <NotesMobile
        type={type}
        title = {Titles[type]}
        form = {form}
        /> :

        <NotesWeb
        type={type}
        title = {Titles[type]}
        form = {form}
        onClickNote = {onClickNote}

        mdNewCategoryOpen = {mdNewCategoryOpen}
        showMdNewCategory = {showMdNewCategory}
        onOkMdNewCategory = {onOkMdNewCategory}
        onCancelMdNewCategory = {onCancelMdNewCategory}
        newCategoryForm = {newCategoryForm}

        mdEditNoteOpen = {mdEditNoteOpen}
        onCloseMdEditNote = {onCloseMdEditNote}
        editNoteForm = {editNoteForm}
        currentRecord = {currentRecord}
        handleOnFieldsChange = {handleOnFieldsChange}

        mdAddCategoryOpen = {mdAddCategoryOpen}
        showMdAddCategory = {showMdAddCategory}
        onOkMdAddCategory = {onOkMdAddCategory}
        onCancelMdAddCategory = {onCancelMdAddCategory}
        addCategoryForm = {addCategoryForm}
        categories = {categories}

        mdAddNoteOpen = {mdAddNoteOpen}
        showMdAddNote = {showMdAddNote}
        onOkMdAddNote = {onOkMdAddNote}
        onCancelMdAddNote = {onCancelMdAddNote}
        addNoteForm = {addNoteForm}

        />
    }

    </>;
}

export default NotesPage;