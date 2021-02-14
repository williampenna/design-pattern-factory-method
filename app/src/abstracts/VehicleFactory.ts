import IFactory from '../interfaces/IFactory';

abstract class VehicleFactory {
  abstract getVehicle(vehicle: string): IFactory;
}

export default VehicleFactory;
