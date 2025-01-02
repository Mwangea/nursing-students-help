import { useState, useEffect } from 'react';
import { UnlockedAnswer } from '../types/answers';

// Mock data for demonstration
const mockAnswers: UnlockedAnswer[] = [
  {
    id: '1',
    question: 'What are the stages of wound healing?',
    answer: 'Wound healing occurs in four main stages: Hemostasis (blood clotting), Inflammation (swelling, redness), Proliferation (tissue growth), and Maturation (strengthening). During hemostasis, platelets form a clot to stop bleeding. The inflammatory phase brings white blood cells to fight infection. In proliferation, new tissue forms. Finally, maturation involves tissue remodeling and strengthening.',
    subject: 'Medical-Surgical Nursing',
    unlockedAt: '2024-03-15T10:30:00Z',
    readTime: 5
  },
  {
    id: '2',
    question: 'How do you calculate medication dosage?',
    answer: 'Medication dosage calculation involves using the formula: Desired dose ÷ Stock strength × Stock volume. Always double-check calculations, use proper units, and follow the "rights" of medication administration: right patient, drug, dose, route, time, documentation.',
    subject: 'Pharmacology',
    unlockedAt: '2024-03-14T15:45:00Z',
    readTime: 3
  },
  {
    id: '3',
    question: 'What are the key assessments for diabetic patients?',
    answer: 'Key assessments for diabetic patients include blood glucose monitoring, foot examination for ulcers or decreased sensation, vital signs, cardiovascular assessment, and neurological status. Regular monitoring of HbA1c, kidney function, and eye examinations are also essential.',
    subject: 'Health Assessment',
    unlockedAt: '2024-03-13T09:15:00Z',
    readTime: 4
  }
];

export function useUnlockedAnswers() {
  const [answers, setAnswers] = useState<UnlockedAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setAnswers(mockAnswers);
      } catch {
        setError('Failed to load unlocked answers');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnswers();
  }, []);

  return { answers, isLoading, error };
}