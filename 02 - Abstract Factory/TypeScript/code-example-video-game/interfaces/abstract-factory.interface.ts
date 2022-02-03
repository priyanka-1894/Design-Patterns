import { Armor } from './armor.interface';
import { Weapon } from './weapon.interface';

export interface AbstractFactory {
    createWeapon(): Weapon;
    createArmor(): Armor;
}