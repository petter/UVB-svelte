import VisitorModel from '../models/Visitor';

export default {
    register: async (path, ip) => {
        VisitorModel.create({ path, ip, time: new Date() });
    },

    getAll: async () => {
        return VisitorModel.find();
    },

    getTotalVisitors: async () => {
        return VisitorModel.count();
    },

    getUniqueVisitors: async () => {
        return (await VisitorModel.aggregate([{ $group: { _id: '$ip' } }]))
            .length;
    }
};
