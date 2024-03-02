import { ServiceEstacion } from "../domain/ServiceEstacion";
import { ServiceEstacionRepository } from "../domain/ServiceEstacionRepository";
import { NotificationServiceUSeCase } from "./Services/NotificationNewService";

export class CreateServiceEstacionUseCase {
  constructor(
    readonly serviceEstacionRepository: ServiceEstacionRepository,
    readonly sendNotification: NotificationServiceUSeCase
  ) {}

  async run(
    name: string,
    zone:string
  ): Promise<ServiceEstacion | null> {
    
    try {
      const subscription = await this.serviceEstacionRepository.createServiceEstacion(name,zone);
      if (subscription)
        this.sendNotification.run(subscription);
      return subscription;
    } catch (error) {
      return null;
    }
  }
}
