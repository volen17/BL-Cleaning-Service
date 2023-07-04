export interface NewService {
  serviceName: string;
  servicePrice: number;
  serviceDescription: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
