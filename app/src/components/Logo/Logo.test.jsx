import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';
import '@testing-library/jest-dom/extend-expect';

describe('Component Logo', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
  });

  test('should have the correct alt text for the image', () => {
    const imgElement = screen.getByRole('img', { className: 'logo-img' });
    expect(imgElement).toHaveAttribute('alt', 'Logo Womans Destiny');
  });

  test('renders logo button with correct link', () => {
    const logoButton = screen.getByRole('link', { name: 'Logo Womans Destiny' });
    expect(logoButton.getAttribute('href')).toBe('/');
  });
});