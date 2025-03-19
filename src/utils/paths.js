export const pathSegments = {
    LOGIN:"login",
    FORGOT_PASSWORD:"forgot-password",
    RESET_PASSWORD: "reset-password",
    VERIFY_CODE: "verify-code",
    HOME: "home", 
    MY_NOTES:"my-notes",
    ARCHIVED_NOTES:"archive",
    DELETED_NOTES:"bin",
}

export const paths = {
    LOGIN: `/${pathSegments.LOGIN}`,
    FORGOT_PASSWORD: `/${pathSegments.FORGOT_PASSWORD}`,
    RESET_PASSWORD: `/${pathSegments.RESET_PASSWORD}`,
    VERIFY_CODE: `/${pathSegments.VERIFY_CODE}`,
    ROOT:`/`,//No tocar
    HOME: `/${pathSegments.HOME}`, 
    MY_NOTES: `/${pathSegments.MY_NOTES}`,
    ARCHIVED_NOTES: `/${pathSegments.ARCHIVED_NOTES}`,
    DELETED_NOTES: `/${pathSegments.DELETED_NOTES}`,
};