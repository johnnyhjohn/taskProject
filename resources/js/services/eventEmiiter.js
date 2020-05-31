import React from 'react'

class EventEmmiter  extends React.Component {
	constructor (props) {
        super(props);

        this.element = document.querySelector('#app')
    }

    subscribe( eventName, callback ) {

        this.element.addEventListener(eventName, (event) => {
            // console.log('Event listener : ', eventName);
            // console.log('Event payload : ', event.detail);
            // console.log('callback : ', callback);
            callback(event.detail);
        });

    }

    dispatch( eventToDispatch, payload ) {
        // console.log('payload : ', payload);
        let dispatchEvent = new CustomEvent( eventToDispatch , {
            detail: payload
        });
    
        this.element.dispatchEvent( dispatchEvent )
    }
}

export default EventEmmiter;