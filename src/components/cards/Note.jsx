import { Flex, Typography, Tag } from "antd";

import { FileText } from "@phosphor-icons/react";
import { colors } from "../../utils/colors";
const { Text } = Typography
function Note(props) {
    const { note,onClickNote } = props;

    return (
        <>
            <Flex
                key={note.noteId}
                className="note"
                style={{ backgroundColor: note.noteColor }}
                gap={"small"}
                vertical
                justify="space-between"
                align="flex-start"
                onClick={() => onClickNote(note)}
            >
                <Flex vertical style={{ width: "100%" }} justify="flex-start" align="flex-start">
                    <Text className="qq-app-note-title">{note.noteTitle}</Text>
                    <p style={{ textAlign: "left" }}>{note.noteContent}</p>

                </Flex>
                <Flex gap="4px 0" wrap>
                    {note.noteCategories?.map((c) => (
                        <Tag key={`${note.noteId}-${c.categoryId}`} bordered={false}>{c.categoryName}</Tag>
                    ))
                    }


                </Flex>
            </Flex>
        </>
    );

}

export default Note;