import axios from 'axios';
import createApp from 'ringcentral-chatbot/dist/apps';
import eventHandler from './eventHandler';
import log4js from 'log4js';

log4js.configure({
    appenders: { out: { type: 'stdout' } },
    categories: { default: { appenders: ['out'], level: 'trace' } },
});
const logger = log4js.getLogger('EXPRESS');

const handle = async (event) => {
    await eventHandler(event);
};
const app = createApp(handle);

app.listen(process.env.PORT || 3000, () => logger.info('Server is running...'));

setInterval(
    () => axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`),
    86400000
);
