export class PaymentMethod {
    creditCardType: string;
    creditCardNo: number;
    chargeType: string;

    constructor(creditCardType: string, creditCardNo: number, chargeType: string )
    {
        this.chargeType=chargeType;
        this.creditCardNo= creditCardNo;
        this.creditCardType= creditCardType;
    }
}
