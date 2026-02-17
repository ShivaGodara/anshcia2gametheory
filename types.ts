
export type StrategistType = 'Analytical' | 'Reactive' | 'High-Risk' | 'Adaptive';

export interface DataPoint {
  time: number;
  performance: number;
  risk: number;
  volatility: number;
}

export interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  details: string;
}

export interface FrameworkCard {
  title: string;
  description: string;
  icon: string;
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: {
    text: string;
    score: number; // Positive for Adaptive/Analytical, Negative for Reactive
  }[];
}
