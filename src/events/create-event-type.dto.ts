import {
  IsString,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  IsBoolean,
  IsOptional,
  IsEmail,
  Allow,
  IsObject,
} from 'class-validator';
import { User } from '../users/user.entity';

export class CreateEventTypeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  slug: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  @IsObject()
  user: User;
}
