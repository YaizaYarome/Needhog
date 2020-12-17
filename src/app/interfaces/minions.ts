export interface Minions {
  results: Minion[];
  count: number;
}

export interface Minion {
  id: number;
  name: string;
  description: string;
  enhancedDescription: string;
  image: string;
  order: number;
  patch: string;
  tooltip: string;
  sources: Sources[];
}

export interface Sources {
  text: any;
  type: any;
}
