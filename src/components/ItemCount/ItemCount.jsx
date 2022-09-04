import React, {useState} from 'react';

const Counter = ({stock, onAdd}) => {
    const [count, setCount] = useState(0);

    function add (){
        if(count < stock){
            setCount(count + 1)
        }
    }

    function substract(){
        if(count > 0){
            setCount(count - 1)
        }
    }

    function reset(){
        setCount(0)
    }
    
    return (
        <div className='container text-center'>
            <div>
                <h3>Contador</h3>
                <p>Stock: {stock}</p>
                <p>Cantidad: {count}</p>
            </div>
            <div>
                <button className='btn btn-dark text-white rounded-pill' onClick={substract}>-</button>
                <button className='btn text-white rounded-pill' onClick={reset}>Reset</button>
                <button className='btn btn-dark text-white rounded-pill' onClick={add}>+</button>
            </div>
            <button className='btn text-white rounded-pill' onClick={() => onAdd(count)}> Finalizar compra</button>
        </div>
    );
}

export default Counter;