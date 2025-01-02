import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import { usePaymentMethods } from '../../hooks/usePaymentMethods';
import { formatCardNumber, formatExpiryDate } from '../../utils/payment';
import type { PaymentMethodFormData } from '../../types/payment';

export function PaymentMethodForm() {
  const [formData, setFormData] = useState<PaymentMethodFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const { addPaymentMethod, isLoading, error } = usePaymentMethods();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addPaymentMethod(formData);
      setFormData({ cardNumber: '', expiryDate: '', cvv: '', name: '' });
    } catch {
      // Error is handled by the hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      <div className="bg-yellow-50 p-4 rounded-lg flex items-center space-x-3">
        <Lock className="h-5 w-5 text-yellow-600" />
        <p className="text-sm text-yellow-700">Your payment information is securely encrypted</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              maxLength={19}
              placeholder="1234 5678 9012 3456"
              className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              value={formData.cardNumber}
              onChange={(e) => {
                const value = formatCardNumber(e.target.value);
                setFormData({ ...formData, cardNumber: value });
              }}
            />
            <CreditCard className="absolute left-4 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              value={formData.expiryDate}
              onChange={(e) => {
                const value = formatExpiryDate(e.target.value);
                setFormData({ ...formData, expiryDate: value });
              }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              placeholder="123"
              maxLength={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              value={formData.cvv}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setFormData({ ...formData, cvv: value });
              }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Adding Payment Method...' : 'Add Payment Method'}
      </button>
    </form>
  );
}