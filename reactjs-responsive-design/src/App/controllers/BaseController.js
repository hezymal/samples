import { Subject } from 'rxjs';

class BaseController {
    constructor() {
        this.subject = new Subject();

        this.notify = this.notify.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    notify(eventType, payload = {}) {
        this.subject.next({ type: eventType, payload });
    }

    subscribe(eventType, fn) {
        this.subject.subscribe((event) => {
            if (eventType === event.type) {
                fn(event.payload);
            }
        });
    }
}

export default BaseController;
