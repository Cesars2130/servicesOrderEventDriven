import { ServiceEstacion } from "./ServiceEstacion";

export interface ServiceEstacionRepository {

  createServiceEstacion(name: string, zone: string): Promise<ServiceEstacion | null>;
}
