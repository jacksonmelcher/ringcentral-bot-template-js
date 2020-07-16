import axios from 'axios';
import createApp from 'ringcentral-chatbot/dist/apps';
import eventHandler from './eventHandler';

const handle = async (event) => {
    await eventHandler(event);
};
const app = createApp(handle);
app.listen(process.env.PORT || 3000, () => console.log('Server is running...'));

setInterval(
    () => axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`),
    86400000
);
