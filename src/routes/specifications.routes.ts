import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificantionsRepository";
import { CreateSpecificantionService } from "../modules/cars/services/CreateSpecificantionService";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificantionService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
