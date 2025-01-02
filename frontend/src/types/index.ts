export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  }
  
  export interface Assignment {
    id: string;
    title: string;
    subject: string;
    dueDate: string;
    status: 'pending' | 'in-progress' | 'completed';
    files: File[];
  }
  
  export interface Subject {
    id: string;
    name: string;
    description: string;
  }