function numberToStars(number) {
	const digits = {
		0: [
			" *** ",
			"*   *",
			"*   *",
			"*   *",
			" *** "
		],
		1: [
			"  *  ",
			" **  ",
			"  *  ",
			"  *  ",
			" *** "
		],
		2: [
			" *** ",
			"*   *",
			"  ** ",
			" *   ",
			" *****"
		],
		3: [
			" *** ",
			"*   *",
			"  ** ",
			"*   *",
			" *** "
		],
		4: [
			"*   *",
			"*   *",
			" *****",
			"    * ",
			"    * "
		],
		5: [
			" *****",
			"*     ",
			" **** ",
			"     *",
			" *****"
		],
		6: [
			" *** ",
			"*    ",
			" ****",
			"*   *",
			" *** "
		],
		7: [
			" *****",
			"    * ",
			"   *  ",
			"  *   ",
			" *    "
		],
		8: [
			" *** ",
			"*   *",
			" *** ",
			"*   *",
			" *** "
		],
		9: [
			" *** ",
			"*   *",
			" ****",
			"    *",
			" *** "
		]
	};

	return number.toString().split('').map(digit => digits[digit]).reduce((acc, val) => {
		return acc.map((line, i) => line + '   ' + val[i]);
	});
}




const psevdoHookOrComponent =(data, renderCallback)=> {
	const state = {};


	const useRender =(count)=> {
		const numberInStars = numberToStars(count);
		renderCallback(numberInStars);
	}


	return (
		new Proxy(data, {
			set(target, prop, value) {
				state[prop] = value;
				target[prop] = value;

				useRender(state.count);
				return true;
			}
		})
	);
};




const FC = psevdoHookOrComponent( { count: 1 }, (numberInStars)=> {
	console.clear();
	console.log(numberInStars.join('\n'));
});


// даже круче чем в реакте, мутируем поле и у нас срабатывает сайд эффект
// но на вид явно ярче той хероты которую redux называют 🤮 (на коленке пример вам, на голом js)
setInterval(() => {
	FC.count = FC.count + 1;
}, 1000);