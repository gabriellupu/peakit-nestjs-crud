import { Crud } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";
import { User } from "./user.entity";
import { UsersService } from "./users.service";

@Crud({
    model: {
        type: User
    }
})
@Controller('users')
export class UsersController {
    constructor(public service: UsersService) {}
}