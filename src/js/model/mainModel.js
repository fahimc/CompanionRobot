let MainModel = {
    POSITIVE: 1,
    NEUTRAL: 0,
    NEGATIVE: -1,
    currentMood: 0,
    getResponse(model, text, score) {
        if (score == undefined) score = MainModel.currentMood;

        let key = text.replace(/\s/g, '__');
        if (model.responseCollection[key]) {
            let collection;
            switch (score) {
                case MainModel.POSITIVE:
                    collection = model.responseCollection[key].positive;
                    break;
                case MainModel.NEUTRAL:
                    collection = model.responseCollection[key].neutral;
                    break;
                case MainModel.NEGATIVE:
                    collection = model.responseCollection[key].negative;
                    break;
            }

            let length = collection.length;
            let responseText = collection[Math.floor(Math.random() * length)];
            return responseText;
        }
    }
};

export default MainModel;
