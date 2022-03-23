import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente Pokemon', () => {
  test('Verifica se o card do pokemons esta correto', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');
    const pokemontype = screen.getByTestId('pokemon-type');
    expect(pokemontype).toHaveTextContent('Electric');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    const pokemonImage = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemonImage.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Verifica se o card do pokemons possui um link', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    expect(pokemonLink).toHaveAttribute('href', '/pokemons/25');
  });

  test('Verifica se o link redireciona para a pagina do pokemon', () => {
    const { history } = renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonLink);
    expect(history.location.pathname).toBe('/pokemons/25');
  });

  test('Verifica se possui uma estrela em pokemons favoritados', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonLink);
    const favoritePokemon = screen.getByRole('checkbox');
    userEvent.click(favoritePokemon);
    const starImg = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(starImg.src).toContain('/star-icon.svg');
  });
});
