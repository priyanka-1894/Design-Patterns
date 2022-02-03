import { AbstractFactory } from './interfaces/abstract-factory.interface';

import { MageFactory } from './factory/mage-factory.class';
import { OrcFactory } from './factory/orc-factory.class';
import { WarriorFactory } from './factory/warrior-factory.class';

function clientCode(factory: AbstractFactory) {
    const sword = factory.createWeapon();
    const armor = factory.createArmor();
  
    console.log(armor.usefulFunction());
    console.log(armor.usefulFunctionWithWeapon(sword));
}

console.log("Client: WarriorFactory");
clientCode(new WarriorFactory());

console.log("----------------");

console.log("Client: OrcFactory");
clientCode(new OrcFactory());

console.log("----------------");

console.log("Client: MageFactory");
clientCode(new MageFactory());