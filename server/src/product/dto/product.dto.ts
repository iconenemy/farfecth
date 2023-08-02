import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsAlpha, IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, IsUrl, MaxLength, MinLength,  } from "class-validator";
import { SortType } from '../types/product.type'

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsAlpha()
    color: string;

    @IsOptional()
    @IsString()
    description: string

    @Type(() => Boolean)
    @IsOptional()
    @IsBoolean()
    in_stock: boolean

    @IsUUID()
    category: string
    
    @IsUUID()
    section: string

    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(6)
    size: string[]
}

export class UpdateProductDto {}

export class QueryProductDto {
    @IsOptional()
    @Type(() => String)
    name: string;

    @IsOptional()
    @Type(() => Number)
    price_less: number
    
    @IsOptional()
    @Type(() => Number)
    price_more: number
    
    @IsOptional()
    @IsArray()
    colors: string[]
   
    @IsOptional()
    @Type(() => Boolean)
    in_stock: boolean

    @IsOptional()
    section: string

    @IsOptional()
    @IsArray()
    categories: string[]

    @IsOptional()
    @IsArray()
    sizes: string[]

    @IsOptional()
    @Type(() => Number)
    page: number
    
    @IsOptional()
    @Type(() => Number)
    take: number

    @IsOptional()
    price_sort: SortType
    
    @IsOptional()
    new_in_sort: SortType
}
