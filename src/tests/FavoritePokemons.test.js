import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente About', () => {
  test('Verifica se possui texto de No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const paragraph = screen.getByText(/no favorite pokemon found/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Verifica se exibe pokemons favoritados', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    userEvent.click(details);
    const favorite = screen.getByRole('checkbox');
    userEvent.click(favorite);

    const favoritesPage = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoritesPage);
    const paragraph = screen.getByText(/pikachu/i);
    expect(paragraph).toBeInTheDocument();
  });
});
