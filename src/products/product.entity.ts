import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    type: 'float',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'text',
  })
  description: string;


}
