import { greetTopic } from "../Data/Data";

class ActionProvider {
  language = true

    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    //abstract message
    handleMessage(obj, widget= "") {
      let text = this.language ? obj.eng : obj.span
      const greetingMessage = this.createChatBotMessage(text, widget)
      this.updateChatbotState(greetingMessage)
    }
    //select translate
    selectEnglish = () =>{
      this.language = true
      this.greet()
    }

    selectSpanish = () =>{
      this.language = false
      this.greet()
    }

    //greet - saludo
    greet() {
      this.handleMessage(greetTopic.msg1)
      this.handleMessage(greetTopic.msg2,{widget: "aboutHer"} )
    }
    
    updateChatbotState(message) {   
     this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider