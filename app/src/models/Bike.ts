import IFactory from '../interfaces/IFactory';

class Bike implements IFactory {
  drive(miles: number): void {
    console.log(`Drive the bike : ${miles} km`);
  }
}

export default Bike;
