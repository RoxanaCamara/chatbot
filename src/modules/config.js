import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from '../components/LearningOptions';
import { optionsAboutHer, optionsLanguage } from '../Data/Data';

const config = { 
  botName: "Narbot",
  initialMessages: [
    createChatBotMessage("Hello, before start select language "),
    createChatBotMessage("Hola, antes de empezar seleccione el idioma",{widget: "language"})],  
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "language",
      widgetFunc: (props) => <LearningOptions options={optionsLanguage} {...props} />,
    },
    {
      widgetName: "aboutHer",
     widgetFunc: (props) => <LearningOptions options={optionsAboutHer} {...props} />,
    },
  ],
}

export default config