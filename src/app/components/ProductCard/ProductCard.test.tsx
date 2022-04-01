import React from 'react';

import { render } from 'tests';

import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  test('Displays all information', async () => {
    const fakeprops = {
      showDetailsFunc: () => console.log('test'),
      productInfo: {
        id: 1,
        name: 'test',
        description: 'test desccription',
        rating: 2,
        image: '',
        promo: true,
        active: true,
      }
    }
    const { getByText, getByLabelText } = render(<ProductCard {...fakeprops} />);
    expect(getByText('test')).toBeInTheDocument();

  });
});