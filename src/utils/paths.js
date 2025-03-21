export const pathSegments = {
    LOGIN:"login",
    FORGOT_PASSWORD:"forgot-password",
    RESET_PASSWORD: "reset-password",
    VERIFY_CODE: "verify-code",
    HOME: "list-suppliers", 
    SUPPLIERS:"list-suppliers",
    CREATE_SUPPLIER:"create",
    EDIT_SUPPLIER:"edit",
    SEE_SUPPLIER:"see",
}

export const paths = {
    LOGIN: `/${pathSegments.LOGIN}`,
    FORGOT_PASSWORD: `/${pathSegments.FORGOT_PASSWORD}`,
    RESET_PASSWORD: `/${pathSegments.RESET_PASSWORD}`,
    VERIFY_CODE: `/${pathSegments.VERIFY_CODE}`,
    ROOT:`/`,//No tocar
    HOME: `/`, 
    SUPPLIERS: `/`,
    CREATE_SUPPLIER: `/${pathSegments.CREATE_SUPPLIER}`,
    EDIT_SUPPLIER:(id) => `${id}/${pathSegments.EDIT_SUPPLIER}`,
    SEE_SUPPLIER:(id) => `${id}/${pathSegments.SEE_SUPPLIER}`,
};