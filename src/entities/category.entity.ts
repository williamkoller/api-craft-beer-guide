import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';
import { Style } from '@/entities/style.entity';
import { BaseEntity } from '@/entities/base-entity';

@Entity('categories')
export class Category extends BaseEntity {
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
    og: number;
    fg: number;
    srm: number;
    ibu: number;
    abv: number;
  };

  @Column({ type: 'simple-array', array: true })
  commercialExamples: Array<string>;

  @Column({ type: 'simple-array', array: true })
  tags: Array<string>;

  @ManyToOne(() => Style, (style) => style.categories)
  @JoinTable()
  style: Style;
}
