import React, { useState } from 'react';
import Product from './Product';

export default function ProductsList(props) {
    
    let productsInCategory=props.products.filter(p=>p.category==props.category);
    const [prodList,setProdList]=useState(productsInCategory);
    return (
        <ul>
            <li>המוצרים בקטגוריית: {props.category}</li>
            {prodList.map(p=><Product key={p.name} details={p}/>)}
             {(productsInCategory.length>5)?<span> בקטגוריה זו מוצרים רבים</span>:''}   
                
             <button id="hideExpensiveProducts" onClick={()=>{setProdList(prodList.filter(p=>p.price<10))}}>הסתר פריטים שמחירם יקר</button>
            <button id="showAllProducts" onClick={()=>{setProdList(productsInCategory)}}>הצג הכל</button>
     
        </ul>
    );
}