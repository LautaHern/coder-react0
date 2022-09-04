import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemList from './ItemList/ItemList';

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
     <ItemListContainer greeting="Este é um mensagem muito divertido" />
     <ItemList></ItemList>
    </>
  );
}

export default App;

