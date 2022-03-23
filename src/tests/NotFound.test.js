import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Testes do componente NotFound', () => {
  test('Verifica se a pagina contem h2', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading', { name: /page requested not found/i });
    expect(heading).toBeInTheDocument();
  });

  test('Verifica se a pagina contem imagem', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img',
      { name: /pikachu crying because the page requested was not found/i });
    expect(image.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
