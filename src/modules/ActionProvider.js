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
  const handleDog = () => { handle( t("chatboot.dog"), {widget: 'dogPicture',})};

  const handleYou = () => { handle( t("chatboot.i-am"))};

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleDog,
            handleYou
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;