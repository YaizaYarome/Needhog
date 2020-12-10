export interface Mounts {
  results: Mount[];
  count: number;
}

export interface Mount {
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
