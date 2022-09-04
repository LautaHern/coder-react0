import {React, useState, useEffect} from 'react';

const productos = [
    {name : "Dark Side of the Moon", price: 30, stock: 5},
    {name: "Atom Heart Mother", price: 25, stock: 4},
    {name: "Stormbringer", price: 23, stock: 10},
    {name: "Who Do We Think We Are", price: 17, stock: 3},
    {name: "2112", price:27, stock:7},
    {name:"Moving Pictures", price:35, stock:1},
];

function consultarPromesa(confirmacion) {
    return new Promise ((resolve) => {
        setTimeout (()=> {
            resolve(productos);
        }, 2000);
    });
};

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
            consultarPromesa(true)
        .then(data =>{
            const productosJSX = data.map((producto, indice) =>
                    <div className="card text-white bg-dark bg-opacity-75 mb-3 row mx-auto" key={indice} style={{maxWidth: '220px', margin: "5px", padding: "10px"}}>
                        <div className="card-header">{producto.name}</div>
                        <div className="card-body">
                            <p className="card-title">${producto.price}</p>
                            <p className="card-text">{producto.stock}</p>
                        </div>
                    </div>
            )

        console.log(productosJSX)

        setProductos(productosJSX)
    })
    .catch(error => {
        console.error(error)
    })
    }, []);
    
    return (

        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemList;