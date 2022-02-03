import { Weapon } from '../interfaces/weapon.interface';
import { Armor } from '../interfaces/armor.interface';

export class BodyArmor implements Armor {
    public usefulFunction(): string {
      return "The result of the BodyArmor";
    }
  
    public usefulFunctionWithWeapon(collaborator: Weapon): string {
      const result = collaborator.usefulFunction();
      return `The result of the BodyAmor collaborating with the (${result})`;
    }
}