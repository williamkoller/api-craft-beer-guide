import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';
import { Style } from '@/entities/style.entity';
import { BaseEntity } from '@/entities/base-entity';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  overallImpression: string;

  @Column({ type: 'varchar' })
  aroma: string;

  @Column({ type: 'varchar' })
  appearance: string;

  @Column({ type: 'varchar' })
  mouthFelling: string;

  @Column({ type: 'varchar' })
  comments: string;

  @Column({ type: 'varchar' })
  history: string;

  @Column({ type: 'varchar' })
  characteristicIngredients: string;

  @Column({ type: 'varchar' })
  styleComparison: string;

  @Column({ type: 'jsonb' })
  vitalStatistics: {
    og: string;
    fg: string;
    srm: string;
    ibu: string;
    abv: string;
  };

  @Column('text', { array: true })
  commercialExamples: Array<string>;

  @Column('text', { array: true })
  tags: Array<string>;

  @ManyToOne(() => Style, (style) => style.categories)
  @JoinTable()
  style: Style;

  @Column({ type: 'varchar' })
  ref: string;
}
