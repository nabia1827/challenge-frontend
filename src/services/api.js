import { axiosDotNet } from "./axios";


const responseBody = res => {
    if (res != undefined) return res.data;
    return null;
};

const requests = {
    get: url => axiosDotNet.get(url).then(responseBody),
    post: (url, body) => axiosDotNet.post(url, body).then(responseBody),
    put: (url, body) => axiosDotNet.put(url, body).then(responseBody),
    delete: url => axiosDotNet.delete(url).then(responseBody),
    patch: (url, body) => axiosDotNet.patch(url, body).then(responseBody),
};


const Auth = {
    loginApp: body => requests.post('/Auth/Authenticate', body),
    logOutApp: (body) => requests.post('/Auth/Logout', body),
};

const Supplier = {
    ListSuppliers: (filter) => axiosDotNet.get('/Supplier/ListSuppliers', { params: filter }).then(responseBody),
    GetSupplier: supplierId => requests.get(`/Supplier/GetSupplier?supplierId=${supplierId}`),
    UpsertSupplier: (supplier) => requests.post(`/Supplier/UpsertSupplier`, supplier),
    DeleteSupplier: (supplierId) => requests.patch(`/Supplier/DeleteSupplier?supplierId=${supplierId}`),
}

const Country = {
    ListCountries: () => requests.get('/Country/ListCountries'),
}

const Source = {
    ListSources: () => requests.get('/Source/ListSources'),
}

export default { 
    Auth, 
    Supplier,
    Country,
    Source,
};