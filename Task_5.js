class HomeDevice {
	constructor(type, color, capacity) {
			this.voltage = '220v';
			this.type = type;
			this.color = color;
			this.capacity = capacity;
	}

getPowerOne = function (time) {
			return `Устройство заработает через ${time} секунд после включения`
	}
};

class KitchenDevice extends HomeDevice {
constructor(type, color, capacity, changeTime, changeCapacity) {
			super();
			this.type = type;
			this.color = color;
			this.capacity = capacity;
			this.changeTime = changeTime;
			this.changeCapacity = changeCapacity;
	}

	getPowerOne = function (time) {
			return `Прибор включится через ${time} секунд, после нажатия кнопки`
	}
};

class NonElectricDevice extends HomeDevice {
	constructor(type, color, capacity, changeTime, batteryType) {
				super();
				this.voltage = '5v'
				this.type = type;
				this.color = color;
				this.capacity = capacity;
				this.changeTime = changeTime;
				this.batteryType = batteryType;
		}
	
		getPowerOne = function (time) {
				return `Прибор включится через ${time} секунд, после звукового сигнала`
		}
};

const kettle = new KitchenDevice('Чайник', 'Красный', '1800 Вт', '5 секунд', '1500 Вт');
const mixer = new KitchenDevice('Миксер', 'Серебристый', '1200 Вт', '3 секунды', '1100 Вт');
const hoover = new HomeDevice('Пылесос', 'Синий', '2000 Вт');
const knife = new NonElectricDevice('Электронож', 'Черный', '50 Вт', '2 секунды','AAA');   

console.log(kettle);
console.log(kettle.getPowerOne(5));
console.log(mixer);
console.log(mixer.getPowerOne(3));
console.log(hoover);
console.log(hoover.getPowerOne(0));
console.log(knife);
console.log(knife.getPowerOne(2));
