import VisitorService from '../../backend/service/Visitor';

export const get = async (req, res) => {
    const visitors = await VisitorService.getAll();
    res.end(JSON.stringify({ visitors: visitors.length }));
};
