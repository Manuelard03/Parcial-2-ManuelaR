export interface types {
    id: string;
    name: string;
    mass?: { massValue: number, massExponent: number };
    gravity?: number;
    density?: number;
    meanRadius?: number;
  }