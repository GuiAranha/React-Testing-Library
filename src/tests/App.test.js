import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente App', () => {
  test('Verifica se o topo da aplicacao possui links e seus redirecionamentos', () => {
    const { history } = renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
    userEvent.click(home);
    expect(history.location.pathname).toEqual('/');

    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
    userEvent.click(about);
    expect(history.location.pathname).toEqual('/about');

    const favoritePokemon = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favoritePokemon).toBeInTheDocument();
    userEvent.click(favoritePokemon);
    expect(history.location.pathname).toEqual('/favorites');
  });
});
