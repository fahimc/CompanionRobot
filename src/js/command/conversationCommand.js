import PersonalModel from '../model/personalModel';
import MainModel from '../model/mainModel';
import ConversationModel from '../model/response/conversationModel';
import EventManager from '../event/eventManager';
import EventModel from '../event/model/eventModel';

class ConversationCommand {
    constructor() {}
    getCommands() {
        let name = PersonalModel.NAME;
        let commands = {
            [name + ' how are you']: this.onHowAreYou.bind(this)
        };
        return commands;
    }
    debug() {
        this.onHowAreYou();
    }
    onHowAreYou(tag) {
        let response = MainModel.getResponse(ConversationModel, 'how are you');
        EventManager.dispatchEvent(EventModel.SPEAK, response);
    }
};

addSpeechCommand(ConversationCommand);

export default ConversationCommand;
