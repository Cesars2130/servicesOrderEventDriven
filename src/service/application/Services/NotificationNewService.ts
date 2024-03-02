import { ServiceEstacion } from "../../domain/ServiceEstacion";
import { NotificationNewService } from "../../infrastructure/servicesRabbitMQ/NotificationNewProduct";

export class NotificationServiceUSeCase {
  constructor(readonly serviceNotifiacion: NotificationNewService) {}

  async run(serviceE: ServiceEstacion) {
    await this.serviceNotifiacion.sendNotification(serviceE);
  }
}
