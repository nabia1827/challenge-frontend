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
        key: paths.SUPPLIERS,
        label: 'Suppliers List',
        icon: <Note size={20} />,
        profiles: [],
    },
    {
        key: 'logout',
        icon: <SignOut size={20} />,
        label: 'Log out',
        profiles: [],
    },
];