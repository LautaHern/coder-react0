import React from 'react';
import ItemCounter from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting} ) => {

    function onAdd(count){
        alert(`Usted ha finalizado con ${count} productos`)
    }

    return (
        <div className='text-center p-5'>
            <h1> {greeting}</h1>
            <div className='container m-5'>
                <ItemCounter stock= {5} onAdd={onAdd}></ItemCounter>
            </div>
        </div>

    );
}

export default ItemListContainer;
