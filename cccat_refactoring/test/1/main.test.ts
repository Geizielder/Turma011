import { calculateRide } from "../../src/1/main"



test("Deve calcular a tarifa de uma corrida em um dia normal", function () {
    const input = [
      {
        distance: 10,
        date: new Date("2021-03-01T10:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(21);
});

test("Deve calcular a tarifa de uma corrida em um dia normal com dois seguimentos", function () {
    const input = [
      {
        distance: 10,
        date: new Date("2021-03-01T10:00:00")
      },
            {
        distance: 10,
        date: new Date("2021-03-01T10:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(42);
});


test("Deve calcular a tarifa de uma corrida de noite", function () {
    const input = [
      {
        distance: 10,
        date: new Date("2021-03-01T23:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(39);
});

test("Deve calcular a tarifa de uma corrida de domingo", function () {
    const input = [
      {
        distance: 10,
        date: new Date("2021-03-07T10:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(29);
});

test("Deve calcular a tarifa de uma corrida de domingo a noite", function () {
    const input = [
      {
        distance: 10,
        date: new Date("2021-03-07T23:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(50);
});


test("Deve Invalid Distance se a ditaância for invalida", function () {
    const input = [
      {
        distance: -10,
        date: new Date("2021-03-07T23:00:00")
      }
    ];
    expect(() => calculateRide(input)).toThrow(new Error("Invalid Distance"));
});

test("Deve retornar Invalid Date se data for inválida", function () {
    const input = [
      {
        distance: 10,
        date: new Date("Formosa")
      }
    ];
    expect( () => calculateRide(input)).toThrow(new Error("Invalid Date"));
});

test("Deve calcular a tarifa  de um corrida mínima", function () {
    const input = [
      {
        distance: 2,
        date: new Date("2021-03-01T10:00:00")
      }
    ];
    const fare = calculateRide(input);
    expect(fare).toBe(10);
});
