export interface Recipe {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
    summary: string;
    instructions?: string;
    ingredients?: {
      name: string;
      amount: number;
      unit: string;
    }[];
  }