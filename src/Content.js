import React from 'react';
import ProductsList from './ProductsList';



function Content(props) {
    return (
        <div>
            <ProductsList products={props.products} category="vegetables"></ProductsList>
            <ProductsList products={props.products} category="milk"></ProductsList>
         </div>
    );
}

export default Content;