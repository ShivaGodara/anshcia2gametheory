
import React from 'react';
import { Brain, TrendingUp, Target, Layers, Rocket, ShieldAlert, Cpu, Network } from 'lucide-react';
import { TimelineEvent, FrameworkCard, QuizQuestion } from './types';

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: 1,
    title: "Scenario Construction",
    description: "Multi-stage digital simulation mimicking high-stakes environments.",
    details: "Participants are thrust into a dynamic market where variables change based on hidden algorithms, forcing them to infer the underlying rules from noisy feedback."
  },
  {
    id: 2,
    title: "Limited Information",
    description: "Introduction of 'Black Swan' events and data scarcity.",
    details: "Strategists only receive 40% of the required data for a 'perfect' decision. They must choose between waiting for more data (costly) or acting immediately (risky)."
  },
  {
    id: 3,
    title: "Resource Constraints",
    description: "Finite cognitive and financial budgets.",
    details: "Every 'scan' for more info costs credits. Participants must manage their attention as a resource, mimicking real-world executive fatigue."
  },
  {
    id: 4,
    title: "Sequential Decisions",
    description: "The path-dependency of choice.",
    details: "Each decision narrows the available future tree. This stage examines how participants adapt to their own previous failures or successes."
  }
];

export const FRAMEWORK_DATA: FrameworkCard[] = [
  {
    title: "Game Theory",
    description: "Mathematical models of strategic interaction.",
    icon: "Network",
    content: "Understanding how agents anticipate the moves of competitors. The experiment tests Nash Equilibrium adherence in non-cooperative settings."
  },
  {
    title: "Behavioral Economics",
    description: "Psychological insights into human decision making.",
    icon: "Brain",
    content: "Exploring cognitive biases like loss aversion and the sunk cost fallacy during the multi-stage simulation."
  },
  {
    title: "Decision Theory",
    description: "The study of identifying optimal strategies.",
    icon: "Target",
    content: "Using expected utility theory to measure how close participant choices are to mathematical perfection versus gut instinct."
  },
  {
    title: "Systems Thinking",
    description: "Holistic approach to analysis.",
    icon: "Layers",
    content: "Measuring the ability to see long-term consequences of local decisions. Strategic success often hinges on feedback loop identification."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "A sudden market shift renders your current strategy 20% less effective. What is your immediate response?",
    options: [
      { text: "Liquidate immediately and wait for stability.", score: -2 },
      { text: "Analyze the root cause before making any adjustments.", score: 2 },
      { text: "Double down on the existing strategy to recoup losses.", score: -5 },
      { text: "Pivote to a pre-planned fallback scenario.", score: 4 }
    ]
  },
  {
    question: "You have limited budget: Do you buy more information or execute with what you have?",
    options: [
      { text: "Buy info—I need 90%+ certainty.", score: 1 },
      { text: "Execute—speed is the primary competitive advantage.", score: -1 },
      { text: "Analyze historical patterns to estimate the missing data.", score: 3 },
      { text: "Ignore the data and follow intuition.", score: -4 }
    ]
  },
  {
    question: "How do you view 'failures' in a simulation?",
    options: [
      { text: "Expensive mistakes to be avoided at all costs.", score: -2 },
      { text: "Data points for calibrating future models.", score: 4 },
      { text: "Bad luck due to external noise.", score: -3 },
      { text: "A sign that the environment is too chaotic to master.", score: -1 }
    ]
  }
];
