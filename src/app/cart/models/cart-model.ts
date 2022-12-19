import {BaseModel} from "../../core/models/base-model";

export class CartModel implements BaseModel{
    constructor(public id: number,
    public brand: string,
    public model: string,
    public name: string,
    public price: number,
    public count: number) { }
}