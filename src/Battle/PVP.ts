import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private player1: Fighter, private player2: Fighter) {
    super(player1);
    this.player2 = player2;
  }

  fight(): number {
    let output = 0;
    while (!output) {
      this.player1.attack(this.player2);
      if (this.player2.lifePoints <= 0) output = 1;
      this.player2.attack(this.player1);
      if (this.player1.lifePoints <= 0) output = -1;
    }
    return output;
  }
}