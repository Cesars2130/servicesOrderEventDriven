import { ServiceEstacion } from "../ServiceEstacion";

export interface INotificationNewService {
  sendNotification(serviceEstacion: ServiceEstacion): Promise<boolean>;
}
