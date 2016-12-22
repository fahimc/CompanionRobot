import PersonalModel from '../model/personalModel';
import EventManager from '../event/eventManager';
import EventModel from '../event/model/eventModel';

class GreetingsCommand {
    constructor(){
      this.responses = [
        'hi',
        'hello',
        'what\'s up'
      ];
    }
    getCommands() {
        let name = PersonalModel.NAME;
        let commands = {
          [name]: this.onGreeting.bind(this),
          ['hi ' + name]: this.onGreeting.bind(this),
          ['hello ' + name]: this.onGreeting.bind(this)
        };
      return commands;
    }
    getReponse(){
      return this.responses[Math.floor(Math.random()*this.responses.length)];
    }
    debug(){
      this.onGreeting();  
    }
    onGreeting(tag) {
        EventManager.dispatchEvent(EventModel.SPEAK, this.getReponse()); 
        EventManager.dispatchEvent(EventModel.TRIGGERED_GREETING); 
    }
};

addSpeechCommand(GreetingsCommand);

export default GreetingsCommand;
