import { CreateServiceEstacionUseCase } from "../application/CreateServiceUseCase";

import { NotificationServiceUSeCase } from "../application/Services/NotificationNewService";
import { CreateServiceController } from "./controllers/CreateServiceController";


import { MysqlServiceEstacionRepository } from "./MysqlServiceRepository";
import { NotificationNewService } from "./servicesRabbitMQ/NotificationNewProduct";

export const mysqlServiceERepository = new MysqlServiceEstacionRepository();
export const servicesNotification = new NotificationNewService();

export const serviceNotificationUseCase = new NotificationServiceUSeCase(
  servicesNotification
);
export const createServiceEstacionUseCase = new CreateServiceEstacionUseCase(
  mysqlServiceERepository,
  serviceNotificationUseCase
);

export const createServiceEstacionController = new CreateServiceController(
  createServiceEstacionUseCase
);
