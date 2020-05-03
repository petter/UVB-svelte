import VisitorService from './service/Visitor';

export default (req, res) => {
    VisitorService.register(req.path, req.ip);
};
