import MainModel from '../mainModel';

let ConversationModel = {
    responseCollection: {
        how__are__you: {
            negative: [
              'i\'m not good',
              'i\'ve had better days'
            ],
            neutral: [
              'i\'m fine',
              'i\'m okay',
            ],
            positive: [
                'i\'m good',
                'i\'m very good'
            ]
        }
    }
};

export default ConversationModel;
