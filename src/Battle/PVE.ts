import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  protected listEnemy: Monster[] | SimpleFighter[];

  constructor(
    protected player1: Fighter, 
    listEnemie: Monster[] | SimpleFighter[],
  ) {
    super(player1);
    this.listEnemy = listEnemie;
  }

  fight(): number {
    let output = 0;
    while (!output) {
      this.listEnemy.forEach((enemy) => {
        this.player1.attack(enemy);
        enemy.attack(this.player1);
      });
      const allEnemyDeath = this.listEnemy
        .every((enemy) => enemy.lifePoints <= 0);
      if (allEnemyDeath) output = 1;
      else if (this.player1.lifePoints <= 0) output = -1;
    }
    return output;
  }
}