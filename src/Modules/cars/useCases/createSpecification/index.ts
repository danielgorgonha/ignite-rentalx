import { SpecificationsRepository } from "../../repositories/implementations/SpecificantionsRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificantioUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
