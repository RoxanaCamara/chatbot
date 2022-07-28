// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import { Buttons } from '../components/Buttons/Buttons';
import DogPicture from '../components/Dog/DogPicture';
import {
  Avatar, Box
} from "@chakra-ui/react";
import { Header } from '../components/Header/Header';
const botName = 'Narbot';

const config = {
  initialMessages: [createChatBotMessage(`Welcome to the chat with ${botName}`),
  createChatBotMessage(`Before start, need to select you language`), 
  createChatBotMessage(`Antes de empezar, seleccione su idioma`,
    {
      widget: 'buttonsLanguage',
    }
  )
],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {  
   botAvatar: (props) =>  <Header/> ,
   userAvatar: (props) =>  <Box {...props} />,
  /*
  header: () =>,
   botChatMessage: (props) => <MyCustomChatMessage {...props} />,   
   userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
   */
 },
 customStyles: {
  // Overrides the chatbot message styles
  botMessageBox: {
    backgroundColor: "#376B7E",
  },
  // Overrides the chat button styles
  chatButton: {
    backgroundColor: "#5ccc9d",
  },
  },
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