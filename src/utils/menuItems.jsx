import React from "react";
import {
    Note,
    SignOut,
    TrashSimple,
    BoxArrowDown,

} from "@phosphor-icons/react";

import { paths } from "./paths";
export const items = [
    {
        key: paths.MY_NOTES,
        label: 'My Notes',
        icon: <Note size={20} />,
        profiles: [],
    },
    {
        key: paths.ARCHIVED_NOTES,
        label: 'Archived Notes',
        icon: <BoxArrowDown size={20}/>,
        profiles: [],
    },
    {
        key: paths.DELETED_NOTES,
        label: 'Deleted Notes',
        icon: <TrashSimple size={20}/>,
        profiles: [],
        
    },
    {
        key: 'logout',
        icon: <SignOut size={20} />,
        label: 'Log out',
        profiles: [],
    },
];