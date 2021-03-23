import { ISpecificantionsRepository } from "../repositories/ISpecificantionsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificantionService {
  constructor(private specificationsRepository: ISpecificantionsRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    };

    this.specificationsRepository.create({
      name,
      description
    });
  }
}

export { CreateSpecificantionService };
