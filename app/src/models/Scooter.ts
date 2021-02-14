import IFactory from '../interfaces/IFactory';

class Scooter implements IFactory {
  drive(miles: number): void {
    console.log(`Drive the Scooter : ${miles} km`);
  }
}

export default Scooter;
