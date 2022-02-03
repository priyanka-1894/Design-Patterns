import { AbstractFactory } from '../interfaces/abstract-factory.interface';

import { Weapon } from '../interfaces/weapon.interface';
import { Armor } from '../interfaces/armor.interface';

import { Sword } from '../product/sword.class';
import { BodyArmor } from '../product/body-armor.class';

export class WarriorFactory implements AbstractFactory {
    public createWeapon(): Weapon {
      return new Sword();
    }
  
    public createArmor(): Armor {
      return new BodyArmor();
    }
}