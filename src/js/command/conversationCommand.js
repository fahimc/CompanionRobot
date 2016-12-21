import PersonalModel from '../model/personalModel';
import EventManager from '../event/eventManager';
import EventModel from '../event/model/eventModel';

class ConversationCommand {
    constructor(){
      this.responses = [
        'i\'m good'
      ];
    }
    getCommands() {
        let name = PersonalModel.NAME;
        let commands = {
        };
      commands[name + ' how are you'] = this.onHowAreYou.bind(this);
      return commands;
    }
    getReponse(){
      return this.responses[Math.floor(Math.random()*this.responses.length)];
    }
    debug(){
      this.onHowAreYou();  
    }
    onHowAreYou(tag) {
        EventManager.dispatchEvent(EventModel.SPEAK, this.getReponse()); 
    }
};

addSpeechCommand(ConversationCommand);

export default ConversationCommand;
