import { api } from '../axios';

export const sendMail = (email, name, message, phone = '') =>
    api.post('/mail', { email, name, phone, message });
