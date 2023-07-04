export interface NewEquipment {
  equipmentName: string;
  equipmentPrice: number;
  equipmentDescription: string;
  imageUrl: string;
}

export interface Equipment {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
