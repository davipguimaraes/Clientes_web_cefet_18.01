/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

function sucesso() {
	console.log(arguments);
}
function erro() {
	console.warn(arguments);
}

/**
 * @return Promise
 */
function doThat(value) {
	var myPromise = new Promise(function(resolve, reject) {
		window.setTimeout(
			function() {
				if (value > 10) {
					resolve(value);
				} else {
					reject(value);
				}
			}.bind(this),
			Math.random() * 2000 + 1000
		);
	});

	return myPromise;
}
