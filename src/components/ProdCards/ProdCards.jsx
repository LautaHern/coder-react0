import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ProdCards = () => {
    return (
        <>
            <div className='p-5 d-flex fondo'>
                <ItemListContainer prodName= "Producto 1" prodPrice="$1500" prodDescription="Esto es un producto de prueba"></ItemListContainer>
                <ItemListContainer prodName= "Producto 2" prodPrice="$1800" prodDescription="Esto es un producto de prueba"></ItemListContainer>
                <ItemListContainer prodName= "Producto 3" prodPrice="$2000" prodDescription="Esto es un producto de prueba"></ItemListContainer>
                <ItemListContainer prodName= "Producto 4" prodPrice="$2200" prodDescription="Esto es un producto de prueba"></ItemListContainer> 
            </div>
        </>
    );
}

export default ProdCards;
