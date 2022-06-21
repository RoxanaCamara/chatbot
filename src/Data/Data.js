export const optionsAboutHer = (props) => {  
  return [
    { text: "Sobre ella", handler: props.aboutHer,  id: 1 },
    { text: "Estudios y conocimientos", handler: props.aboutHer, id: 2 },
    { text: "Experiencia laboral", handler: props.aboutHer, id: 3 },
    { text: "Datos de contacto", handler: props.aboutHer, id: 4 },
  ]
};

export const optionsLanguage = (props) => {  
  return [
    { text: "English", handler: props.selectEnglish,  id: 1 },
    { text: "Spanish", handler: props.selectSpanish, id: 2 },
  ]
};

export let greetTopic = {
  msg1: {
    eng:"Hi, friend. Mi name is Narbot and I .....  ", 
    span: "Hola, mi nombre es Narbot. Soy un asistente de Recruiters"      
  },

  msg2: {
    eng:" Have any ask? ", 
    span: " Quieres preguntar algo?"      
  }
}
