import { writable } from 'svelte/store';

export const legos = writable([]);

async function fetchLego() {
  // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const url = `https://api.sheety.co/76ad47b2d5b6382b8a64c0ad92494661/legoProject/legos`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedLegos = data.legos.map((lego, index) => {
    return {
      name: lego.name,
      legoId: lego.legoId,
      id: index + 1,
      // image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${index + 1}.png`,
      image: `/images/${lego.image}`,
      instructions: lego.instructionsLink,
      category: lego.category,
      id: lego.id,
    };
  });
  legos.set(loadedLegos);
}
fetchLego();
