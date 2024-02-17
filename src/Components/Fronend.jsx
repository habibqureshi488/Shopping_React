import React, { useState } from 'react';
import './App.css'; 

function Frontend() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  
  const addItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = {
        name: inputValue,
        quantity: 1 
      };
      setItems([...items , newItem]);
      setInputValue('');
    }
  }; 

 
  const increaseQuantity = (index) => {
    const updatedItems = [...items];
    updatedItems[index].quantity++;
    setItems(updatedItems);
  };

  const decreaseQuantity = (index) =>{
    const updatedItems = [...items]
if(updatedItems[index].quantity > 1)
{
    updatedItems[index].quantity--;
    setItems(updatedItems);
}
    
  }

  const deleteQuantity = (index) =>{
    const updatedItems = [...items]
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }
  


  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        <button onClick={addItem}>Add</button>
      </div>

      <table class="table">
      
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Item</th>
      <th scope="col">Quntity</th>
      <th scope="col">Up</th>
      <th scope="col">Down</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {items.map((item, index) => (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td><button className='btn btn-primary' onClick={()=>increaseQuantity(index)}>increase</button></td>
      <td><button className='btn btn-warning' onClick={()=> decreaseQuantity(index)}>decrease</button></td>
      <td><button className='btn btn-danger' onClick={()=>deleteQuantity(index)}>Delete</button></td>
    </tr>
    ))}
  </tbody>
   
</table>
     
    </div>
  );
}

export default Frontend;
