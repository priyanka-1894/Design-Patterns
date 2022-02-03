import { Weapon } from '../interfaces/weapon.interface';

export class Sword implements Weapon {
    public usefulFunction(): string {
      return "The result of the Sword";
    }
}