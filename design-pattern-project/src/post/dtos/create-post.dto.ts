import {IsInt, IsNotEmpty, IsString, MinLength} from 'class-validator';
import {Expose, Transform} from "class-transformer";
import {ValidateIfUserExists} from "../Validators/user-exists.validator";

export class CreatePostDto {
    @IsNotEmpty({message: "user_id is required"})
    @IsInt({ message: 'User ID must be an integer.' })
    @ValidateIfUserExists()
    @Transform(({ value }) => Number(value), { toClassOnly: true })
    @Expose({name: 'user_id'})
    userId: number;

    @IsNotEmpty()
    @IsString({ message: 'Title must be a string.' })
    @MinLength(1, { message: 'Title cannot be empty.' })
    title: string;

    @IsNotEmpty()
    @IsString({message: 'Body must be a string'})
    @MinLength(1, {message: 'Body cannot be empty.'})
    body: string;
}
