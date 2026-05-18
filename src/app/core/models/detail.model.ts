export interface RenovationInfo{
    name: string,
    number: string,
    holderName: string,
    holderSurname: string,
    CIF: string,
    address: string,
    policyState: string,
    billingAddressInfo: BillingAddressInfo
    payments: Payment[],
    paymentMethod: PaymentMethod,
    paymentAddress: PaymentAddress,
    contact: contact
}

export interface BillingAddressInfo{
    billingAddressNumber: number,
    billingAddressCity: string,
    billingAddressPostalCode: string,
}

export type PaymentState = 'Pendiente' | 'Pagado' | 'Vencido';

export interface Payment{
    date: string,
    period: string,
    amount: number,
    state: PaymentState
}

export interface PaymentMethod{
    name: string,
    city: string,
    postalCode: string,
    address: string,
    number: string,
    addressNotes: string
}

export interface paymentAddress{
    name: string,
    city: string,
    postralCode: string,
    address: string,
    number: string,
    addressNotes: string
}

export interface contact{
    email1: string,
    email2: string,
    phone: string
}