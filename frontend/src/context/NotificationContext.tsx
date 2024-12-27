import {createContext, useContext, useState } from "react";




interface Toast{
    id: number;
    message: string;
    type: 'success' | 'error';
}

interface NotificationContextType{
    showToast: (message: string, type: 'success' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode}> =  ({ children })  => {
    const [toasts, setToasts] = useState<Toast[]>([]);


    const showToast = (message: string, type: 'success' | 'error') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type}]);
        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));

        }, 3000);
    };

    return(
        <NotificationContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {toasts.map(toast => (
                    <div key={toast.id} className={`px-4 py-2 rounded-md shadow-lg ${toast.type === 'success' ? 'bg-green-500 text-white' :  'bg-red-500 text-white'} animate-fade-in-down`}>
                        {toast.message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) throw new Error('useNotification must be used within NotificationProvider');
    return context;
  }; 
