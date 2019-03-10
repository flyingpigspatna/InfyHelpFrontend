export class ShipToAddress {

    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    state: string;
    zipCode: number;

    constructor(addressLine1: string, addressLine2: string, city: string, country: string, state: string,
        zipcode: number) {

        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this, country = country;
        this.state = state;
        this.zipCode = zipcode;
    }
}
