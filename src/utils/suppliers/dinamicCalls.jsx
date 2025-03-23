import api from "../../services/api";
import { message } from "antd";

export const GetSupplier = async (supplierId) => {

    try {
        const response = await api.Supplier.GetSupplier(supplierId)
        return response;
    } catch (error) {
        message.error(error.message);
    }
};

export const UpsertSupplier = async (id, legalName, tradeName, 
    taxIdentNumber,phone, email, website,address, countryId, revenue) => {

    try {
        const supplier = {
            supplierId: id?id:0,
            legalName: legalName,
            tradeName: tradeName,
            taxIndentNumber: taxIdentNumber,
            phoneNumber: phone,
            mailAddress: email,
            website: website,
            physicalAddress: address,
            countryId: countryId,
            annualRevenue: revenue,
            lastEdited: "",
            supplierActive: true
        }
        const response = await api.Supplier.UpsertSupplier(supplier);
        return response;
    } catch (error) {
        message.error(error.message);
    }
};

export const DeleteSupplier = async (supplierId) => {

    try {
        const response = await api.Supplier.DeleteSupplier(supplierId);
        return response;
    } catch (error) {
        message.error(error.message);
    }
};