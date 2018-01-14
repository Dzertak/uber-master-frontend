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
            object.picture,
            object.experience,
            object.skills,
            object.profession,
			object.end_time,
            object.smoke,
            object.payment,
            object.start_time,
            object.tools,
            object.classType,
            object.isUserBlocked
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
            object.picture,
            object.classType,
            object.isUserBlocked
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
            object.picture,
            object.classType
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
            object.masterProfession
        );
        return order;
    }

}