import React, { useState } from "react";
import { Flex, Grid} from "antd";
import SupplierWeb from "./SupplierWeb";
import SupplierMobile from "./SupplierMobile";

const { useBreakpoint } = Grid;

function SupplierPage(props) {
    const {type} = props;
    const screens = useBreakpoint();
    const isXsScreen = screens.xs !== undefined && screens.xs;

    return <>{isXsScreen ?
        <SupplierMobile
        /> :
        <SupplierWeb
        />
    }
        
    </>;
}

export default SupplierPage;