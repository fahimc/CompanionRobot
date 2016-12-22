import EventManager from '../event/eventManager';
import EventModel from '../event/model/eventModel';

let ConversationService = {
    isConversation: false,
    converstaionsHad: {
        context: false,
        howAreYou: false,
        feeling: false,
        today: false
    },
    currentIndex: 0,
    conversationStartTimer: null,
    init() {
        EventManager.addEventListener(EventModel.TRIGGERED_GREETING, this.onGreeting.bind(this));
        annyang.addCallback('result', this.onResult.bind(this));
    },
    onResult(text) {
        if (!this.isConversation && !this.conversationStartTimer) {
            this.stop();
            return
        }else if(this.conversationStartTimer){
            this.restart();
            return;
        }
        this.respond(text);

    },
    onGreeting() {
        console.log('onGreeting');
        this.start();
    },
    stop() {
        this.clearTimer();
        this.isConversation = false;
        for (let key in this.converstaionsHad) {
            this.converstaionsHad[key] = false;
        }
    },
    clearTimer() {
        clearTimeout(this.conversationStartTimer);
        this.conversationStartTimer = null;
    },
    restart(){
        this.clearTimer();
        this.start();
    },
    start() {
        this.conversationStartTimer = setTimeout(this.beginConvo.bind(this), 3000);
    },
    beginConvo() {
        this.clearTimer();
        this.isConversation = true;
        this.next();

    },
    next() {
        console.log(this.currentIndex);
        switch (this.currentIndex) {
            case 0:
                this.askName();
                break;
            case 1:
                this.askHowAreYou();
                break;
        }
    },
    respond(text) {
        switch (this.currentIndex) {
            case 0:
                if(this.converstaionsHad.context)this.setName(text);
                break;
            case 1:
                break;
        }
    },
    setName(text) {
        EventManager.dispatchEvent(EventModel.UPDATE_CONTEXT, text);
        this.currentIndex++;
        this.next();
    },
    askName() {
        EventManager.dispatchEvent(EventModel.SPEAK, 'what\' your name?');
        this.converstaionsHad.context = true;
    },
    askHowAreYou() {
        EventManager.dispatchEvent(EventModel.SPEAK, 'how are you?');
        this.converstaionsHad.context = true;
    }

};

export default ConversationService;
