export class BaseEntity {
    private _name: string;
    private _description: string;
    private _object_id: number;


    constructor(name: string, description: string, object_id: number) {
        this._name = name;
        this._description = description;
        this._object_id = object_id;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get object_id(): number {
        return this._object_id;
    }

    set object_id(value: number) {
        this._object_id = value;
    }
}
