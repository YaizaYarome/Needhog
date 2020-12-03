export interface Mounts {
  mount: Mounts[];
  sources: Sources[];
}

export interface Mounts {
  id: number;
  name: string;
  description: string;
  enhancedDescription: string;
  image: string;
  order: number;
  patch: string;
  tooltip: string;
}

export interface Sources {
  text: any;
  type: any;
}
