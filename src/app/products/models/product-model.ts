import {BaseModel} from "../../core/models/base-model";

export class ProductModel implements BaseModel {
    constructor(public id:number,
                public name:string,
                public brand: string,
                public model:string,
                public price:number,
                public isAvailable:boolean
    ) { }
}
