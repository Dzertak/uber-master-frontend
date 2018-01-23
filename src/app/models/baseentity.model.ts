export class BaseEntity {
    name: string;
    description: string;
    object_id: number;


    constructor(name: string, description: string, object_id: number) {
        this.name = name;
        this.description = description;
        this.object_id = object_id;
    }


 /*   get getName(): string {
        return this.name;
    }

    set setName(value: string) {
        this.name = value;
    }

    get getDescription(): string {
        return this.description;
    }

    set setDescription(value: string) {
        this.description = value;
    }

    get getObject_id(): number {
        return this.object_id;
    }

    set setObject_id(value: number) {
        this.object_id = value;
    }*/
}
