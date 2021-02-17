import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { Category } from '@/entities/category.entity';
import { BaseEntity } from '@/entities/base-entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('styles')
export class Style extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar' })
  name: string;

  @ApiProperty()
  @Column({ type: 'text' })
  description: string;

  @ApiProperty()
  @OneToMany(() => Category, (category) => category.style, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  categories: Category[];

  @ApiProperty()
  @Column({ type: 'varchar' })
  ref: string;

  constructor(partial: Partial<Style>) {
    super();
    Object.assign(this, partial);
  }
}
