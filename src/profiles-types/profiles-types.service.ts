import { Injectable, BadRequestException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { paginate } from 'src/common/pagination/paginate';

import { ProfileType } from './profile-type.entity';
import { CreateProfileTypeDto } from './create-profile-type.dto';

@Injectable()
export class ProfilesTypesService {
  constructor(
    @InjectRepository(ProfileType)
    private profileTypeRepository: Repository<ProfileType>,
  ) {}

  /**
   * 
   * @param CreateProfileTypeDto data
   * @return Promise<ProfileType>
   */
  async create(data: CreateProfileTypeDto): Promise<ProfileType> {
    let profileType = await this.profileTypeRepository.findOne({
      where: {
        name: data.name,
      },
    });

    if (profileType) throw new BadRequestException(`name already exists`);

    const newProfileType = this.profileTypeRepository.create(data);
    return this.profileTypeRepository.save(newProfileType);
  }

  /**
   * @returns Promise<ProfileType[]>
   */
  async find(): Promise<ProfileType[]> {
    let data = await this.profileTypeRepository.find();

    return data;
  }
}
