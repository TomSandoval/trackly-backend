import { GenderEnum } from "../user.entity"

export class UpdateUserDto {
    username?: string
    birthdate?: Date
    avatar?: string
    gender?: GenderEnum
}