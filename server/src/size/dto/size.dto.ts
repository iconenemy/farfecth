import { IsEnum, MaxLength, MinLength, NotEquals, isNotEmpty } from "class-validator";
import { SizeType } from "../type/size.type";
import { Type } from "class-transformer";

export class CreateSizeDto {
    @MinLength(1)
    @MaxLength(3)
    @Type(() => String)
    size: SizeType
}

export class UpdateSizeDto {
    @MinLength(1)
    @MaxLength(3)
    size: SizeType
}
