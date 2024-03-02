import { query } from "../../database/mysql";
import { ServiceEstacion } from "../domain/ServiceEstacion";
import { ServiceEstacionRepository } from "../domain/ServiceEstacionRepository";

export class MysqlServiceEstacionRepository
  implements ServiceEstacionRepository
{
  async createServiceEstacion(
    name: string,
    zone: string
  ): Promise<ServiceEstacion | null> {
    let service = null;
    const sql = "INSERT INTO estacion (zone, name) VALUES (?,?)";
    const params: any[] = [name, zone];
    try {
      const [result]: any = await query(sql, params);
      service = new ServiceEstacion(result.insertId, name, zone);
    } catch (error) {
      service = null;
    } finally {
      return service;
    }
  }
} 
