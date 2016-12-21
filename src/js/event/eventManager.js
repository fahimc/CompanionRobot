let EventManager = {
    eventCollection: {},
    addEventListener(key, callback) {
        if (!this.eventCollection[key]) {
            this.eventCollection[key] = [];
        }
        this.eventCollection[key].push(callback);
    },
    removeEventListener(key, callback) {
        if (!this.eventCollection[key]) return;
        this.eventCollection[key].forEach(function(item, index) {
            if (item == callback) {
                this.eventCollection[key].splice(index, 1);
                return;
            }
        });
    },
    dispatchEvent(key, data) {
        if(!this.eventCollection[key]) return;
        this.eventCollection[key].forEach(function(callback) {
            callback(data);
        });
    }
};

export default EventManager;
