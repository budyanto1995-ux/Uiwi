
export type GameMode = 'GUESS' | 'IDENTIFY' | 'RIDDLE' | 'LEARN' | 'LANGUAGE' | 'HOME' | 'ADVENTURE' | 'ASK' | 'BOLANG';

export interface VolumeSettings {
  narration: number;
  sfx: number;
}

export interface GameState {
  score: number;
  level: number;
  streak: number;
  volumes: VolumeSettings;
}

export interface RiddleData {
  question: string;
  answer: number;
  hint: string;
  explanation: string;
}

export interface IdentifyChallenge {
  options: number[];
  correctAnswer: number;
  count: number;
  itemEmoji: string;
}

export interface LanguageWord {
  word: string;
  translation: string;
  phonetic: string;
  emoji: string;
}

// Interface untuk data grounding dari Google Maps
export interface MapGroundingChunk {
  maps?: {
    uri: string;
    title: string;
  };
}

// Interface untuk data grounding dari Google Search
export interface SearchGroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}
