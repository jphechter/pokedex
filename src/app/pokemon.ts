export class Pokemon {
  name: string;
  types: string[];
  id: number;
  height: number;
  weight: number;
  moves: string[];
  baseStats: {}[] = [];
  sprites?: any;
  constructor(pokemon) {
    this.name = pokemon['name'];
    this.types = pokemon['types'].map(type => type['type']['name']);
    this.id = pokemon['id'];
    this.height = pokemon['height'];
    this.weight = pokemon['weight'];
    this.moves = pokemon['moves'].map(move => move['move']['name']);
    pokemon['stats'].forEach(statValue => {
      this.baseStats.push(
        {
          name: statValue['stat']['name'],
          stat: statValue['base_stat'],
        }
      )
    });
    this.sprites = pokemon['sprites'];
  }
}
