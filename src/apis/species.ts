import apiAction from "../utils/ApiAction";

const SpeciesAPI = {
    getList: () => {
        return new Promise((resolve, reject) => {
            apiAction.get('/species/')
                .then(response => resolve(response.data))
                .catch(err => reject(err))
        })
    }
};

export default SpeciesAPI;