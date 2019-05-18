import React from "react";
import AddItemForm from './composition/AddItemForm';
import ShoppingList from './composition/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }

  handleCheckedItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if(itm === item) {
        itm.checked = !itm.checked;
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    console.log('handle add item', { itemName })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems} 
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckedItem}
            />
          </section>
        </main>
      </>
    )
  }
}

export default App;
