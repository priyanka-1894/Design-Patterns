import { AbstractFactory } from '../interfaces/abstract-factory.interface';

import { Weapon } from '../interfaces/weapon.interface';
import { Armor } from '../interfaces/armor.interface';

import { Axe } from '../product/axe.class';
import { OrcArmor } from '../product/orc-armor.class';

export class OrcFactory implements AbstractFactory {
    public createWeapon(): Weapon {
      return new Axe();
    }
  
    public createArmor(): Armor {
      return new OrcArmor();
    }
}