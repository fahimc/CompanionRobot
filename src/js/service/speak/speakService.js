import EventManager from '../../event/eventManager';
import EventModel from '../../event/model/eventModel';

let SpeakService = {
    utterance: null,
    debugMode: true,
    init() {
        this.utterance = new SpeechSynthesisUtterance();
        this.utterance.lang = 'en-GB';
        this.utterance.onend = this.onSpeakEnd.bind(this);
        speechSynthesis.onvoiceschanged = this.onVoices.bind(this);
        EventManager.addEventListener(EventModel.SPEAK, this.onSendResponse.bind(this));
    },
    onSpeakEnd() {
        setTimeout(function() {
            EventManager.dispatchEvent(EventModel.RESUME_LISTENING);
        }, 100);
    },
    onVoices() {
        let voices = speechSynthesis.getVoices();
        this.maleVoice = voices.filter(function(voice) {        
            return voice.name.indexOf('English Female') >= 0;    
        })[0];
        speechSynthesis.onvoiceschanged = null;
    },
    onSendResponse(data) {
        EventManager.dispatchEvent(EventModel.STOP_LISTENING);
        this.speak(data);
    },
    speak(str) {
        if(this.debugMode){
            console.log('RESPONSE:', str);
            return;
        }
        this.utterance.text = str;
        this.utterance.voice = this.maleVoice;
        speechSynthesis.speak(this.utterance);
    }
};

window.SpeakService = SpeakService;
export default SpeakService;
