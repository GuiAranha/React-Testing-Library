import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../services/renderWithRouter';

describe('Testes do componente NotFound', () => {
  test('Verifica se a pagina contem h2', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: /encountered pokémons/i });
    expect(heading).toBeInTheDocument();
  });

  test('Verifica se o botao proximo pokemon é executado de maneira correta', () => {
    renderWithRouter(<App />);
    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(buttonNext).toBeInTheDocument();
    userEvent.click(buttonNext);
    const pokemonName = screen.getByText(/charmander/i);
    expect(pokemonName).toBeInTheDocument();
  });

  test('Verifica se é mostrado apenas um pokemon por vez', () => {
    renderWithRouter(<App />);
    const pokemonQuantity = screen.getAllByTestId('pokemon-name');
    expect(pokemonQuantity).toHaveLength(1);
  });

  test('Verifica se contem botoes de todos tipos de elemento', () => {
    renderWithRouter(<App />);
    const pokemonButtonQuantity = screen.getAllByTestId('pokemon-type-button');
    const number7 = 7;
    expect(pokemonButtonQuantity).toHaveLength(number7);

    const buttonNormal = screen.getByRole('button', { name: /normal/i });
    expect(buttonNormal).toBeInTheDocument();
    const buttonFire = screen.getByRole('button', { name: /fire/i });
    expect(buttonFire).toBeInTheDocument();
    const buttonBug = screen.getByRole('button', { name: /bug/i });
    expect(buttonBug).toBeInTheDocument();
    const buttonEletric = screen.getByRole('button', { name: /electric/i });
    expect(buttonEletric).toBeInTheDocument();
    const buttonPoison = screen.getByRole('button', { name: /poison/i });
    expect(buttonPoison).toBeInTheDocument();
    const buttonPsychic = screen.getByRole('button', { name: /psychic/i });
    expect(buttonPsychic).toBeInTheDocument();
    const buttonDragon = screen.getByRole('button', { name: /dragon/i });
    expect(buttonDragon).toBeInTheDocument();
  });

  test('Verifica se contem botao para resetar filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();

    userEvent.click(buttonAll);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeInTheDocument();
  });
});
