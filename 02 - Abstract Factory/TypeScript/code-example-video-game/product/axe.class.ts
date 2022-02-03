import { Weapon } from '../interfaces/weapon.interface';

export class Axe implements Weapon {
    public usefulFunction(): string {
      return "The result of the Axe";
    }
}