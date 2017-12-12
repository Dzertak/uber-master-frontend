export class BaseEntity {
    private _name: String;
    private _description: String;
    private _object_id: number;


    constructor(name: String, description: String, object_id: number) {
        this._name = name;
        this._description = description;
        this._object_id = object_id;
    }


    get name(): String {
        return this._name;
    }

    set name(value: String) {
        this._name = value;
    }

    get description(): String {
        return this._description;
    }

    set description(value: String) {
        this._description = value;
    }

    get object_id(): number {
        return this._object_id;
    }

    set object_id(value: number) {
        this._object_id = value;
    }
}
