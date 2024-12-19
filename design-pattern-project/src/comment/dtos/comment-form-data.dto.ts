import {IsInt, IsNotEmpty, IsString, MinLength} from "class-validator";
import {ValidateIfUserExists} from "../../user/validators/user-exists.validator";
import {Expose, Transform} from "class-transformer";

export class CommentFormDataDto {
    @IsNotEmpty({message: "user_id is required"})
    @IsInt({ message: 'User ID must be an integer.' })
    @ValidateIfUserExists()
    @Transform(({ value }) => Number(value), { toClassOnly: true })
    @Expose({name: 'user_id'})
    userId: number;

    @IsNotEmpty()
    @IsString({message: 'Body must be a string'})
    @MinLength(1, {message: 'Body cannot be empty.'})
    body: string;
}