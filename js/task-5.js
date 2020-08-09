// Напиши класс Car с указанными свойствами и методами.

class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }
  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor(obj) {
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    for (const [key, value] of Object.entries(obj)) {
      if (key === 'speed') {
        this.speed = value;
      }
      if (key === 'price') {
        this._price = value;
      }
      if (key === 'maxSpeed') {
        this.maxSpeed = value;
      }
      if (key === 'isOn') {
        this.isOn = value;
      }
      if (key === 'distance') {
        this.distance = value;
      }
    }
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    const totalSpeed = this.speed + value;
    if (totalSpeed <= this.maxSpeed) {
      this.speed += value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    const totalSpeed = this.speed - value;
    if (totalSpeed >= 0) {
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car(
	{
		maxSpeed: 200,
		price: 2000
	}
);
const impala = new Car(
	{// Очередность свойст может быть произвольной!!!
		price: 3000,
		maxSpeed: 230
	}
);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

impala.turnOn();
impala.accelerate(60);
impala.drive(5);
Car.getSpecs(impala);// maxSpeed: 230, speed: 60, isOn: true, distance: 300, price: 3000
impala.decelerate(30);
impala.drive(4);
impala.turnOff();
Car.getSpecs(impala);// maxSpeed: 230, speed: 0, isOn: false, distance: 420, price: 3000
console.log(impala.price); // 3000
impala.price = 3500;
console.log(impala.price); // 3500
