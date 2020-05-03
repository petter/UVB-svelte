import mongoose from 'mongoose';

const ContactFormEntrySchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    ip: String,
    time: Date
});

export default mongoose.model('ContactFormEntry', ContactFormEntrySchema);
