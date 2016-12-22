import EventManager from '../../event/eventManager';
import EventModel from '../../event/model/eventModel';

let MemoryService = {
    currentContextCollection:[],
    init(){
        EventManager.addEventListener(EventModel.UPDATE_CONTEXT, this.onContext.bind(this));
    },
    onContext(contextArray){
        this.currentContextCollection = contextArray;
    }
};

export default MemoryService;
