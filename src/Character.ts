import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(
    private name: string, 
    race: Race = new Elf(name, getRandomInt(1, 10)),
    archetype: Archetype = new Mage(name),
  ) {
    this._race = race;
    this._archetype = archetype;
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),  
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  protected set lifePoints(value: number) {
    this._lifePoints = value;    
    if (this._lifePoints < 0) this._lifePoints = -1;
  }

  get strength(): number {
    return this._strength;
  }

  protected set strength(value: number) {
    this._strength = value;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  protected set maxLifePoints(value: number) {
    const maxValue = this._race.maxLifePoints;
    const valueAdded = value + this.maxLifePoints;    
    if (valueAdded > maxValue) {
      this._maxLifePoints = this.maxLifePoints;
    } else {
      this._maxLifePoints = value;
    }
  }

  get defense(): number {
    return this._defense;
  }

  protected set defense(value: number) {
    this._defense = value;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  protected set dexterity(value: number) {
    this._dexterity = value;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this.lifePoints -= damage;
    }
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this.strength;
    enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this.maxLifePoints += getRandomInt(1, 10);
    this.strength += getRandomInt(1, 10);
    this.dexterity += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this.lifePoints = this._race.maxLifePoints;
  }

  special(enemy: Fighter): void {
    if (enemy.lifePoints > 2) {
      console.log(`${this._race.name} Says: eu vou lhe esbagaçar!!`);
      // enemy.receiveDamage(enemy.lifePoints * 0.60);
      // this.lifePoints -= this.lifePoints * 0.30;
    } else {
      console.log(`${this._race.name} Says: Eu não chuto cachorro morto`);
    }
  }
}