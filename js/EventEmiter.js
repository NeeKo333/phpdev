// This class is needed for communication between classes.
class EventEmitter {
    constructor() {
        this.dependencies = {};
    }

    sub(event, clb, once = false) {
        if (!this.dependencies[event]) {
            this.dependencies[event] = [];
        }

        const handler = data => {
            clb(data);
            if (once) {
                this.unsub(event, handler);
            }
        };

        this.dependencies[event].push(handler);
        return () => this.unsub(event, handler);
    }

    unsub(event, clb) {
        if (this.dependencies[event]) {
            this.dependencies[event] = this.dependencies[event].filter(el => el !== clb);
        }
    }

    dispatch(event, data) {
        if (this.dependencies[event]) {
            this.dependencies[event].forEach(element => {
                try {
                    element(data);
                } catch (error) {
                    console.error(`Error in event handler for event '${event}':`, error);
                }
            });
        }
    }
}

export default new EventEmitter();
