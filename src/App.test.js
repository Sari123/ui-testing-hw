import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom' ;
import userEvent from '@testing-library/user-event';
import ProductsList from './ProductsList';


const products = [
  { prodName: "orange", price: 2, category: "fruit" },
  { prodName: "banana", price: 5, category: "fruit" },
  { prodName: "peach", price: 13, category: "fruit" },
  { prodName: "currot", price: 6, category: "vegetables" },
  { prodName: "pepper", price: 60, category: "vegetables" },
  { prodName: "potato", price: 12, category: "vegetables" },
  { prodName: "onion", price: 3, category: "vegetables" },
  { prodName: "cucumber", price: 6, category: "vegetables" },
  { prodName: "tomato", price: 21, category: "vegetables" },
  { prodName: "cheese", price: 4, category: "milk" },
  { prodName: "milk ", price: 4.5, category: "milk" },
];
test('renders products list of many products', () => {
  const { getByText } = render(<ProductsList products={products} category="vegetables"/>);
  const liElement = getByText(/בקטגוריה זו מוצרים רבים/i);
  expect(liElement).toBeInTheDocument();
});

test('renders products list of less than 5 items', () => {
  const { queryByText } = render(<ProductsList products={products} category="milk"/>);
  const liElement = queryByText(/בקטגוריה זו מוצרים רבים/i);
  expect(liElement).toBeNull();
});

test('rendered products list - appropriate items amount', () => {
  var category="milk";
  const { getAllByText } = render(<ProductsList products={products} category={category}/>);
  const liElements = getAllByText(/שם מוצר/i );
  expect(liElements).toHaveLength(products.filter(p=>p.category==category).length);
});

test('renders products list and click on button to hide expensive products ', () => {
  var category="vegetables";
  render(<ProductsList products={products} category={category}/>);
  userEvent.click(screen.getByText(/הסתר פריטים שמחירם יקר/i));
  const liElements = screen.getAllByText(/שם מוצר/i );
  expect(liElements).toHaveLength(products.filter(p=>p.category===category&&p.price<10).length);
});
