export class BillToAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    state: string;
    zipCode: number;
    firstName: string;
    lastName: string;
    dayPhone: number;
    eveningPhone: number;

    constructor(addressLine1: string, addressLine2: string, city: string, country: string, state: string,
        zipcode: number, firstName: string, lastName: string, dayPhone: number, eveningPhone: number) {

        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this, country = country;
        this.state = state;
        this.zipCode = zipcode;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dayPhone = dayPhone;
        this.eveningPhone = eveningPhone;
    }

}
