
import SpeakService from "./service/speak/speakService";
import SpeechRecognitionService from "./service/recognition/speechRecognitionService";
import ConversationService from "./service/conversationService";
import MemoryService from "./service/memory/memoryService";

let Main =
{
  init()
  {
    document.addEventListener('DOMContentLoaded', this.onLoaded.bind(this));
  },
  onLoaded()
  {
    SpeakService.init();
    SpeechRecognitionService.init();
    ConversationService.init();
  }
};

Main.init();




