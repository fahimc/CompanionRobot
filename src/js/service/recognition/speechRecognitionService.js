import EventManager from '../../event/eventManager';
import EventModel from '../../event/model/eventModel';

let SpeechRecognitionService = {
    commandCollection: [],
    commands: {},
    init() {
        if (annyang) {
            this.getCommands();
            annyang.start();
        }
    },
    getCommands() {
        this.commandCollection.forEach(function(item) {
            let instance = new item();
            annyang.addCommands(instance.getCommands());
        }.bind(this));
    },
    say(str){
        this.commandCollection.forEach(function(item) {
            let instance = new item();
            let commands = instance.getCommands();
            if(commands[str]) instance.debug(str);
        }.bind(this));
    }
};
window.addSpeechCommand = function(obj) {
    SpeechRecognitionService.commandCollection.push(obj);
}
window.say = SpeechRecognitionService.say.bind(SpeechRecognitionService);

require('../../command/command');

export default SpeechRecognitionService;
