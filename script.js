let data = {
	nameOfProduct: ['Балансер', 'Леденцы', 'Тряпочка из микрофибры с ионами серебра',
					'Швабра', 'Икона святой богородицы', 'Витаминки', 'Эфирное масло - тонус',
					'Ультра новая тряпочка из микрофибры(уже синего цвета)', 'Леденцы со вкусом говна',
					'Библия'],
	whatItCanDo: ['Вылучиться от рака', 'Увидить бога',
					'Помыть туолет', 'Летать', 'Стрелять лазерами из глаз',
					'кушать какашки', 'нюхать подмышки',
					'ходить в общественный туолет']
};


let nameOfProduct = data.nameOfProduct[Math.floor(Math.random() * data.nameOfProduct.length)];
let firstPath = 'Привет я Ира и я хочу представить вам новый продукт от Green Way: ' + nameOfProduct;

let whatItCanDo = data.whatItCanDo[Math.floor(Math.random() * data.whatItCanDo.length)];
let secondPath = 'С его помощью вы сможете ' + whatItCanDo;

let discount = 70 + Math.floor(Math.random() * 25)
let thirdPath = `Срочно покупайте! ТОЛЬКО СЕГОДНЯ НА НЕГО СКИДКА ${discount}%`;

let message = `${firstPath}\n${secondPath}\n${thirdPath}`
console.log(message)
