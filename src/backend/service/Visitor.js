import VisitorModel from '../models/Visitor';

export default {
    register: async (path, ip) => {
        VisitorModel.create({ path, ip, time: new Date() });
    },

    getAll: async () => {
        return await VisitorModel.find();
    }
};
