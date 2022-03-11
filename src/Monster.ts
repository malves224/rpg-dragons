import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  protected set lifePoints(value: number) {
    this._lifePoints = value;    
    if (this._lifePoints <= 0) this._lifePoints = -1;
  }

  get strength(): number {
    return this.strength;
  }

  protected set strength(value: number) {
    this.strength = value;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      this.lifePoints -= attackPoints;
    }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter) {
    enemy.receiveDamage(this.strength);
  }
}