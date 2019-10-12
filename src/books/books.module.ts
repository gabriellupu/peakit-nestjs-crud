import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    controllers: [BooksController],
    providers: [BooksService],
    imports: [
      TypeOrmModule.forFeature([Book])
    ]
  })
export class BooksModule {}
