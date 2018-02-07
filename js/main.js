;(function () {

	var arr = [1, 2, 3, 4];

	function square(x) { 
		return x * x; 
	}

	function map(fn, array) {
		var result = [];

		for (var i = 0; i < array.length; i++) {
			var s = fn(array[i]);
			result.push(s);
		}

		return result;
	}

	console.log(map(square, arr));

	document.getElementById('output').innerHTML = map(square, arr).join(' - ');
}
)();