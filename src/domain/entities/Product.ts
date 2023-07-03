import { Entity } from "./Entity";

export class Product extends Entity {
  constructor(
    public name: string,
    public category: Category,
    public price: number,
    public description: string,
  ) {
    super()
  }
}

export enum Category {
  MainCourses = 'MainCourses',
  SideDishes = 'SideDishes',
  Beverages = 'Beverages',
  Desserts = 'Desserts',
}