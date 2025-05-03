import { PilotAttributes } from "../interfaces/PilotAttributes.js";

export class Pilot {
    public name: string
    public age: number

    constructor(attributes: PilotAttributes) {
        this.name = attributes.name;
        this.age = attributes.age
    }
}