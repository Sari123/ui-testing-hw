import React from 'react';

export default function Product(props) {
    const prodDetails=props.details;

        return (<li>
                קטגוריה:  {prodDetails.category}   ,
              שם מוצר:{prodDetails.prodName}   ,
                 מחיר: {prodDetails.price}    ,
                
        </li>)
      
}
