import { Injectable } from "@angular/core";
import { Master, Poke, Admin, Order } from "../index";

@Injectable()
export class Convertator {

    public static toMaster(object: any) : Master {
      let master: Master = new Master(
        object.name,
        object.description,
        object.object_id,
        object.location,
        object.userDescription,
        object.phoneNumber,
        object.password,
        object.picture,
        object.isBlocked,
        object.profession,
        object.skills,
        object.experience,
        object.payment,
        object.smoke,
        object.tools,
        object.start_time,
        object.end_time,
          object.averMark
      );
      return master;
    }

    public static toPoke(object: any) : Poke {
      let poke: Poke = new Poke(
        object.name,
        object.description,
        object.object_id,
        object.location,
        object.userDescription,
        object.phoneNumber,
        object.password,
        object.picture,
        object.isBlocked
      );
      return poke;
    }

    public static toAdmin(object: any) : Admin {
      let admin: Admin = new Admin(
        object.name,
        object.description,
        object.object_id,
        object.location,
        object.userDescription,
        object.phoneNumber,
        object.password,
        object.picture
      );
      return admin;
    }

    public static toOrder(object: any) : Order {
        let order: Order = new Order(
            object.name,
            object.description,
            object.object_id,
            object.smallDescription,
            object.bigDescription,
            object.startDate,
            object.dueDate,
            object.status,
            object.master,
            object.masterProfession,
            object.masterName,
            object.mark,
            object.masterEndDate,
            object.pokeId
        );
        return order;
    }

}
