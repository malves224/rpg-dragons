import { EnergyType } from '../Energy';
import { AttackType } from '../AttackType';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _formOfAttack: AttackType;
  private _energyType: EnergyType;
  static _countInstance = 0;

  constructor(name: string) {
    super(name);
    this._formOfAttack = 'força';
    this._energyType = 'stamina';
    Ranger._countInstance += 1;
  }

  get formOfAttack(): AttackType {
    return this._formOfAttack;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._countInstance;
  }
}