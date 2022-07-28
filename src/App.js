import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./modules/ActionProvider";
import config from "./modules/config";
import MessageParser from "./modules/MessageParser";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./translations/en/globla.json";
import global_es from "./translations/es/globla.json";
import "./style.css";
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Slide,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useState } from "react";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

function App() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <ChakraProvider>
        <I18nextProvider i18n={i18next}>
          <Container >
            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
              <GridItem colEnd={6} area={"footer"}>
                <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                  <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                  />
                </Slide>
                <IconButton
                  colorScheme="teal"
                  aria-label="Call Segun"
                  size="lg"
                  className="icon_chat"
                  onClick={onToggle}
                  icon={<ChatIcon />}
                />
              </GridItem>
            </Grid>
          </Container>
        </I18nextProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
