export function formatCardNumber(value: string): string {
    return value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }
  
  export function formatExpiryDate(value: string): string {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    }
    return cleaned;
  }
  
  export function validateCardNumber(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^\d{16}$/.test(cleaned);
  }
  
  export function validateExpiryDate(expiryDate: string): boolean {
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    const numMonth = parseInt(month, 10);
    const numYear = parseInt(year, 10);
    
    return numMonth >= 1 && numMonth <= 12 && 
           numYear >= currentYear && 
           (numYear > currentYear || numMonth >= currentMonth);
  }