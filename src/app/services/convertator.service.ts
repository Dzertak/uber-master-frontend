import { Injectable } from "@angular/core";
import { Master, Poke, Admin, Order } from "../index";

@Injectable()
export class Convertator {

    public toMaster(object: any) : Master {
        let master: Master = new Master(
            object.name,
            object.description,
            object.object_id,
            object.location,
            object.userDescription,
            object.phoneNumber,
            object.password,
            object.picture,
            object.profession,
            object.skills,
            object.experience,
            object.payment,
            object.smoke,
            object.tools,
            object.start_time,
            object.end_time,
            object.classType,
            object.isUserBlocked
        );
        return master;
    }

    public toPoke(object: any) : Poke {
        let poke: Poke = new Poke(
            object.name,
            object.description,
            object.object_id,
            object.location,
            object.userDescription,
            object.phoneNumber,
            object.password,
            object.picture,
            object.classType,
            object.isUserBlocked
        );
        return poke;
    }

    public toAdmin(object: any) : Admin {
        let admin: Admin = new Admin(
            object.name,
            object.description,
            object.object_id,
            object.location,
            object.userDescription,
            object.phoneNumber,
            object.password,
            object.picture,
            object.classType
        );
        return admin;
    }

    public toOrder(object: any) : Order {
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