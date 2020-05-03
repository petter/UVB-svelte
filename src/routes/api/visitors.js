import VisitorService from '../../backend/service/Visitor';

export const get = async (req, res) => {
    const totalVisitors = await VisitorService.getTotalVisitors();
    const uniqueVisitors = await VisitorService.getUniqueVisitors();
    res.end(JSON.stringify({ totalVisitors, uniqueVisitors }));
};
