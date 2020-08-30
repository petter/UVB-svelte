import mongoose from 'mongoose';

const VisitorSchema = new mongoose.Schema({
    path: String,
    ip: String,
    time: Date
});

export default mongoose.model('Visitor', VisitorSchema);
