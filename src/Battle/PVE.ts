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

  protected static atackEnemy(
    playerAttacker: Monster | SimpleFighter, 
    playerVictim: Monster | SimpleFighter, 
  ): void {
    if (playerAttacker.lifePoints > 0) {
      playerAttacker.attack(playerVictim);
    }
  }

  fight(): number {
    let output = 0;
    while (!output) {
      this.listEnemy.forEach((enemy) => {
        PVE.atackEnemy(this.player1, enemy);
        PVE.atackEnemy(enemy, this.player1);
      });
      const allEnemyDeath = this.listEnemy
        .every((enemy) => enemy.lifePoints <= 0);
      if (allEnemyDeath) output = 1;
      else if (this.player1.lifePoints <= 0) output = -1;
    }
    return output;
  }
}