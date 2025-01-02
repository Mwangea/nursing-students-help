export interface PaymentMethod {
    id: string;
    lastFour: string;
    expiryDate: string;
    brand: string;
  }
  
  export interface PaymentMethodFormData {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    name: string;
  }