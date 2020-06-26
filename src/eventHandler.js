const eventHandler = async (event) => {
    const { type } = event;

    switch (type) {
        case 'Message4Bot':
            await handleMessage4Bot(event);
            break;
        case 'BotJoinGroup':
            await handleBotJoinedGroup(event);
            break;
    }
};

const handleMessage4Bot = async (event) => {
    const { text, bot, group } = event;
    if (text === 'ping') {
        await bot.sendMessage(group.id, { text: 'pong' });
    }
};
const handleBotJoinedGroup = async (event) => {
    const { bot, group } = event;
    await bot.sendMessage(group.id, {
        text:
            'Thank you for using the RingCentral Chatbot template. Edit eventHandler.js to customize responses.',
    });
};

export default eventHandler;
