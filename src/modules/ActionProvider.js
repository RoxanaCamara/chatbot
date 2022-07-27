import React from 'react';
import { useTranslation } from 'react-i18next';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [ t, i18n] = useTranslation("global")

  const handle = (text = "", widget = {}) => {
    const botMessage = createChatBotMessage(text, widget);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMuchMsg = (texts = []) => {
    texts.forEach(text => {
      const botMessage = createChatBotMessage(text);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    });
   
  };
  const handleDog = () => { handle( t("chatboot.dog"), {widget: 'dogPicture',})};

  const handleYou = () => { handle( t("chatboot.i-am"))};

  const handleNotUnderstand = () => { handle( t("chatboot.not-understand"))};

  const handleAboutHer = () => { handleMuchMsg( [t("chatboot.about-her-job"), t("chatboot.about-her-objectives"), t("chatboot.about-her-presentation") ])};

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleDog,
            handleYou,
            handleNotUnderstand,
            handleAboutHer
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;