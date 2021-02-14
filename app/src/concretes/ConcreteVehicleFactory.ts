import VehicleFactory from "../abstracts/VehicleFactory";
import IFactory from "../interfaces/IFactory";
import Bike from "../models/Bike";
import Scooter from "../models/Scooter";

class ConcreteVehicleFactory extends VehicleFactory {
  getVehicle(vehicle: string): IFactory {
    switch (vehicle) {
      case 'Scooter':
        return new Scooter();
      case 'Bike':
        return new Bike();
      default:
        throw new Error(`Vehicle ${vehicle} cannot be created.`)
    }
  }
}

export default ConcreteVehicleFactory;
