import { Request, Response } from "express";

import { CreateServiceEstacionUseCase } from "../../application/CreateServiceUseCase";


export class CreateServiceController {
  constructor(readonly createServiceEUseCase: CreateServiceEstacionUseCase) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const serviceE = await this.createServiceEUseCase.run(
        data.name,
        data.zone
      );

      if (serviceE)
        res.status(201).send({
          status: "success",
          data: {
            id:serviceE?.id,
            zone: serviceE?.zone,
            name: serviceE?.name
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "No fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
