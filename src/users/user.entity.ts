import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Exclude, Type } from 'class-transformer';

import { ApiModelProperty } from '@nestjs/swagger';
import { Book } from 'src/books/book.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
  
  @ApiModelProperty({
    example: "john@doe.com",
    description: "This email will be used for authetication only."
  })
  @Column({unique: true})
  email: string;

  @ApiModelProperty()
  @Column({unique: true})
  username: string;

  @ApiModelProperty({
    example: 'Gabriel'
  })
  @Column({nullable: true})
  displayName: string;

  @ApiModelProperty({
    example: 'Gabriel'
  })
  @Column()
  password!: string;

  @ApiModelProperty()
  @Type((t) => Book)
  @OneToOne(type => Book)
  @JoinColumn()
  book: Book;
}