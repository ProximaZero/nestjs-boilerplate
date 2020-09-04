import { ApiProperty } from "@nestjs/swagger";
import { User } from "modules/user";

export class Token {
    @ApiProperty({ nullable: null })
    expiresIn: string;
    @ApiProperty({ nullable: null })
    accessToken: string;
    @ApiProperty({ nullable: null, type: User })
    user: User;
}