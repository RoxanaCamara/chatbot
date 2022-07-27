// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { Buttons } from '../components/Buttons/Buttons';
import DogPicture from '../components/Dog/DogPicture';

const botName = 'Narbot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  /*customComponents: {
   header: () => <div style={{ backgroundColor: 'red', padding: "5px", borderRadius: "3px" }}>This is the header</div>,
   botAvatar: (props) => <MyAvatar {...props} />,
   botChatMessage: (props) => <MyCustomChatMessage {...props} />,
   userAvatar: (props) => <MyCustomAvatar {...props} />,
   userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },*/
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
    {
      widgetName: 'buttonsLanguage',
      widgetFunc: (props) => <Buttons {...props} />,
    }
  ],
};

export default config;