
import { CreditCard, Trash2 } from 'lucide-react';
import { usePaymentMethods } from '../../hooks/usePaymentMethods';

export function PaymentMethodList() {
  const { paymentMethods, removePaymentMethod } = usePaymentMethods();

  if (paymentMethods.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No payment methods added yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200"
        >
          <div className="flex items-center space-x-4">
            <CreditCard className="h-6 w-6 text-gray-400" />
            <div>
              <p className="font-medium">•••• •••• •••• {method.lastFour}</p>
              <p className="text-sm text-gray-500">Expires {method.expiryDate}</p>
            </div>
          </div>
          <button
            onClick={() => removePaymentMethod(method.id)}
            className="text-red-500 hover:text-red-600 p-2"
            title="Remove Payment Method"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
}