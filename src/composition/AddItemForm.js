import React, { Component} from 'react';

export default class AddItemForm extends Component {
    render() {
        /* TODO: need to wire up the form to add items in App state... */
      return (
        <form>
            <input
              type='text'
              placeholder='carrots'
              aria-label='Shopping list item'
            />
            <button type='submit'>Add Item</button>
        </form>
      )
    }
}