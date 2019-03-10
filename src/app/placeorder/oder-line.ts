import { Item } from './item';
import { ShipToAddress } from './ship-to-address';
import { BillToAddress } from './bill-to-address';

export class OderLine {
    deliveryMethod: string;
    fulfilmentType: string;
    orderQuantity: number;
    unitPrice: number;
    estimatedShipDate: string;
    item: Item;
    shipToAddress: ShipToAddress;
    billToAddress: BillToAddress;

    constructor(deliveryMethod: string, fulfilmentType: string, orederQuantity: number,
        unitPrice: number, estimatedShipDate: string, item: Item, shipTOAddress: ShipToAddress,
        billToAddress: BillToAddress)
    {
        this.billToAddress=billToAddress;
        this.deliveryMethod=deliveryMethod;
        this.estimatedShipDate=estimatedShipDate;
        this.fulfilmentType =fulfilmentType;
        this.item =item;
        this.orderQuantity=orederQuantity;
        this.shipToAddress=shipTOAddress;
        this.unitPrice=unitPrice;
    }
}
