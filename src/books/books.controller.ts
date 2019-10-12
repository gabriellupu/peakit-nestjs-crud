import { Crud } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { Book } from "./book.entity";
import { BooksService } from "./books.service";
import { ApiUseTags } from "@nestjs/swagger";

@Crud({
    model: {
        type: Book
    }
})
@ApiUseTags('carti')
@Controller('books')
export class BooksController {
    constructor(public service: BooksService) {}
}