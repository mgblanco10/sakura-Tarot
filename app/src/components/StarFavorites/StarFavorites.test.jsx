import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import StarFavorites from './StarFavorites';

describe('Component Logo', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <StarFavorites />
      </MemoryRouter>
    );
  });


  test('should have the correct alt text for the image', () => {
    const imgElement = screen.getByRole('img', { className: 'star-favorites' });
    expect(imgElement).toHaveAttribute('alt', 'Icono de favoritos');
  });

  test('renders star favorites button with correct link', () => {
    const favoriteButton = screen.getByRole('link', { name: 'Icono de favoritos' });
    expect(favoriteButton.getAttribute('href')).toBe('/favorites');
  });
});