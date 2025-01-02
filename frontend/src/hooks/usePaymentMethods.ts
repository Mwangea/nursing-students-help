import { useState } from 'react';
import { PaymentMethod, PaymentMethodFormData } from '../types/payment';
import { validateCardNumber, validateExpiryDate } from '../utils/payment';

export function usePaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addPaymentMethod = async (data: PaymentMethodFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate card details
      if (!validateCardNumber(data.cardNumber)) {
        throw new Error('Invalid card number');
      }
      if (!validateExpiryDate(data.expiryDate)) {
        throw new Error('Invalid expiry date');
      }
      if (!/^\d{3}$/.test(data.cvv)) {
        throw new Error('Invalid CVV');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMethod: PaymentMethod = {
        id: Math.random().toString(36).substr(2, 9),
        lastFour: data.cardNumber.slice(-4),
        expiryDate: data.expiryDate,
        brand: 'visa',
      };
      
      setPaymentMethods(prev => [...prev, newMethod]);
      return newMethod;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add payment method');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const removePaymentMethod = async (id: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      setPaymentMethods(prev => prev.filter(method => method.id !== id));
    } catch (err) {
      setError('Failed to remove payment method');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    paymentMethods,
    isLoading,
    error,
    addPaymentMethod,
    removePaymentMethod,
  };
}