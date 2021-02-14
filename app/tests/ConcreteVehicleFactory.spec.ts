import ConcreteVehicleFactory from '../src/concretes/ConcreteVehicleFactory';

const vehicleFac = new ConcreteVehicleFactory();

describe('Tests suit - Concrete Vehicle Factory.', () => {
  it('SUCESS: Call get scooter vehicle.', async () => {
    const response = vehicleFac.getVehicle('Scooter');
    expect(response).toEqual(undefined);
  });
});
