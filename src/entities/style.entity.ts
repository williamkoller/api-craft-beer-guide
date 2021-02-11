import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { Category } from '@/entities/category.entity';
import { BaseEntity } from '@/entities/base-entity';

@Entity('styles')
export class Style extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @OneToMany(() => Category, (category) => category.style, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  categories: Array<Category>;

  @Column({ type: 'varchar', nullable: true })
  ref?: string;
}
