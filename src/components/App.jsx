import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import ProdCards from './ProdCards/ProdCards';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
     <ItemListContainer greeting="Este é um mensagem muito divertido" />
     <ItemListContainer greeting="This is another funny message" />
    <ProdCards></ProdCards>
    </>
  );
}

export default App;

