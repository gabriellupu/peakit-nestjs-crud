import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ApiModelProperty } from '@nestjs/swagger';
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: string;
  
  @ApiModelProperty()
  @Column()
  title: string;

  @ApiModelProperty()
  @Column()
  author: string;
}