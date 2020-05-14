import axios from 'axios';
import createApp from 'ringcentral-chatbot/dist/apps';

const handle = async (event) => {
    const { type, text, group, bot } = event;
    if (type === 'Message4Bot' && text === 'ping') {
        await bot.sendMessage(group.id, { text: 'pong' });
    }
};
const app = createApp(handle);
app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT);

setInterval(
    () => axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`),
    86400000
);
