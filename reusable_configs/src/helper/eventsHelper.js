export default class EventService {

    getEvents() {
        return fetch('assets/events.json').then(res => res.json())
            .then(d => d.data);
    }
}