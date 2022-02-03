import { AbstractFactory } from '../interfaces/abstract-factory.interface';

import { Weapon } from '../interfaces/weapon.interface';
import { Armor } from '../interfaces/armor.interface';

import { MageFireball } from '../product/mage-fireball.class';
import { Cloak } from '../product/cloak.class';

export class MageFactory implements AbstractFactory {
    public createWeapon(): Weapon {
      return new MageFireball();
    }
  
    public createArmor(): Armor {
      return new Cloak();
    }
}