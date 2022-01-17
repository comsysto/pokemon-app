/* eslint-disable import/prefer-default-export */

export function getRandomPokemonId(): number {
  return Math.floor(Math.random() * 151) + 1;
}
