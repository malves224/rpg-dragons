import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(protected _lifePoints = 999) {
    super(_lifePoints);
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  protected set lifePoints(value: number) {
    this._lifePoints = value;
  }
}