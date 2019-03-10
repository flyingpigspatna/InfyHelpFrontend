import { OderLine } from './oder-line';
import { PaymentMethod } from './payment-method';

export class Order {
    enteredBy: string;
    customerEmailId: string;
    orderTotalAmount: number;
    orderTotalTax: number;
    currency: string;
    orderLine: OderLine;
    paymentMethod: PaymentMethod;

    constructor(enteredBy: string, customerEmailId: string, orderTotalAmount: number,
        orderTotalTax: number, currency: string, orderLine: OderLine,
        paymentMethod: PaymentMethod)
    {
        this.currency=currency;
        this.customerEmailId=customerEmailId;
        this.enteredBy= enteredBy;
        this.orderLine = orderLine;
        this.orderTotalAmount = orderTotalAmount;
        this.orderTotalTax = orderTotalTax;
        this.paymentMethod = paymentMethod;
    }
}
