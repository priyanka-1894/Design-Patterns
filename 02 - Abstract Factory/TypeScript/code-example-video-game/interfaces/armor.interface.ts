import { Weapon } from "./weapon.interface";

export interface Armor {
  usefulFunction(): string;
  usefulFunctionWithWeapon(collaborator: Weapon): string;
}