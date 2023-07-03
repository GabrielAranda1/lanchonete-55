import { v4 } from "uuid"

export abstract class Entity {
  public readonly id: string
  public createdAt: Date
  public updatedAt: Date

  constructor(id?: string) {
    this.id = id ?? this.generateId()
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }

  private generateId(): string {
    return v4()
  }
}