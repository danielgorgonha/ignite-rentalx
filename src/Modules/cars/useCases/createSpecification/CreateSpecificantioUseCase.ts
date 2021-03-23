import { ISpecificantionsRepository } from "../../repositories/ISpecificantionsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificantionsRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
