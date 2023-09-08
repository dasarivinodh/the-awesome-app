import { Product } from "./Product";

export class CartItem{

    constructor(public product? :Product,public quantity?:number){ // if you mark the item it will become members  of the class as same as  declaring variable
        
    }
}