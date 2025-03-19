import React from "react";
import { items } from "./menuItems";

export const getMenuItemsForUser = (profileId) => {
    // Filtra los items principales
    return items;/*
        .filter(item => item.profiles.includes(profileId))
        .map(item => ({
            ...item,
            // Filtra los children de cada item según perfil
            children: item.children?.filter(child => child.profiles.includes(perfilId)) || undefined
        }));*/
};