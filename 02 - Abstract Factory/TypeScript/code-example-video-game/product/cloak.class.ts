import { Weapon } from '../interfaces/weapon.interface';
import { Armor } from '../interfaces/armor.interface';

export class Cloak implements Armor {
    public usefulFunction(): string {
      return "The result of the Cloak";
    }
  
    public usefulFunctionWithWeapon(collaborator: Weapon): string {
      const result = collaborator.usefulFunction();
      return `The result of the Cloak collaborating with the (${result})`;
    }
}