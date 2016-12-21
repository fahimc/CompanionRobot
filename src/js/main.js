
import SpeakService from "./service/speak/speakService";
import SpeechRecognitionService from "./service/recognition/speechRecognitionService";

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
  }
};

Main.init();




