import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import { Injectable } from "@nestjs/common";
import { Book } from "./book.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BooksService extends TypeOrmCrudService<Book> {
    constructor(@InjectRepository(Book) repo) {
        super(repo);
    }
}