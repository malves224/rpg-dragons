export type EnergyType = 'mana' | 'stamina';

export type AttackType = 'magia' | 'força';

export default interface Energy {
  type_: EnergyType,
  amount: number,
}