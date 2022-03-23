import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente PokemonDetails', () => {
  test('Verifica se as informacoes do pokemon sao mostradas', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonLink);

    const pokemonDetails = screen.getByText('Pikachu Details');
    expect(pokemonDetails).toBeInTheDocument();

    const pokemonSummary = screen.getByRole('heading', { name: /summary/i });
    expect(pokemonSummary).toBeInTheDocument();

    const paragraph = screen.getByText(/This intelligent/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Verifica se possui os mapas contendo localizacoes', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonLink);

    const headingLocation = screen.getByRole('heading',
      { name: /game locations of pikachu/i });
    expect(headingLocation).toBeInTheDocument();

    const pokemonLocation = screen.getAllByAltText('Pikachu location');
    expect(pokemonLocation[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonLocation[0].alt).toContain('Pikachu location');
  });

  test('Verifica se o usuario pode favoritar o pokemon', () => {
    renderWithRouter(<App />);
    const pokemonLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(pokemonLink);

    const checkboxFavorite = screen.getByRole('checkbox');
    expect(checkboxFavorite).toBeInTheDocument();
    const labelFavorite = screen.getByLabelText('Pokémon favoritado?');
    expect(labelFavorite).toBeInTheDocument();
  });
});
