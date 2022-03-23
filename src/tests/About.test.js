import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente About', () => {
  test('Verifica se a pagina contem h2', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: /about pokédex/i });
    expect(heading).toBeInTheDocument();
  });

  test('Verifica se a pagina contem 2 paragrafos', () => {
    renderWithRouter(<About />);
    const paragraph1 = screen.getByText(/this application/i);
    const paragraph2 = screen.getByText(/one can/i);
    expect(paragraph1).toBeInTheDocument();
    expect(paragraph2).toBeInTheDocument();
  });

  test('Verifica se a pagina contem imagem', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { name: /pokédex/i });
    expect(image.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
