/* global $ */

var money = 10.00;
var cokes = 1.50;
var chips = 1.25;
var candybar = 1.25;
var water = 2.00;
var pretzels = 1.00;
var licorice = 1.50;
var item;
var itemtotal = 0;

function purchase() {

	if (item === 'Coke') {

		$('#message').html('You bought a coke');

		money = money - cokes;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else if (item === 'Chips') {

		$('#message').html('You bought a bag of chips');
		money = money - chips;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else if (item === 'Candy bar') {

		$('#message').html('You bought a candy bar');
		money = money - candybar;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else if (item === 'Licorice') {

		$('#message').html('You bought a bag of licorice');
		money = money - licorice;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else if (item === 'Pretzels') {

		$('#message').html('You bought a bag of pretzels');
		money = money - pretzels;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else if (item === 'Water') {

		$('#message').html('You bought a bottle of water');
		money = money - water;

		console.log(money);

		$('#bal').html(money);

		itemtotal = itemtotal + 1;

		$('#itemtotal').html(itemtotal);

	} else {
		$('#message').html("Please choose from one of the items above");
	}

}

function money1(item) {

	$('#alert').show();
	$('#item1').html(item);

	money = money + 0;

	itemtotal = itemtotal + 0;

}


function notCoke() {
	if (money < 1.50 && item === 'Coke') {
		money1('a coke');
	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}

function notChips() {
	if (money < 1.25 && item === 'Chips') {
		money1('a bag of chips');
	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}

function notCandybar() {
	if (money < 1.25 && item === 'Candy bar') {
		money1('a candy bar');
	}

	if (money < 1.25) {

	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}

function notWater() {
	if (money < 2.00 && item === 'Water') {
		money1('a bottle of water');
	}

	if (money < 2.00) {

	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}

function notLicorice() {
	if (money < 1.50 && item === 'Licorice') {
		money1('a bag of licorice');
	}

	if (money < 1.50) {

	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}

function notPretzels() {
	if (money < 1.00 && item === 'Pretzels') {
		money1('a bag of pretzels');
	}

	if (money < 1.00) {

	}

	$().ready(function () {
		setTimeout(function () {
			$("#alert").fadeOut(1000);
		}, 1000);
	});

}


$("#buy").click(function () {

	item = $('#item').val();

	if (money < 1.50 && item === 'Coke') {
		notCoke();
	} else if (money < 1.25 && item === "Chips") {
		notChips();
	} else if (money < 1.25 && item === "Candy bar") {
		notCandybar();
	} else if (money < 1.50 && item === "Licorice") {
		notLicorice();

	} else if (money < 1.00 && item === "Pretzels") {

		notPretzels();
	} else if (money < 2.00 && item === "Water") {
		notWater();
	} else {
		purchase();

	}


	$('#item').val('');


});

$('#coke').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Coke');

});

$('#coke').click(function () {

	if (item === 'Coke') {
		purchase();
	}

});

$('#chips').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Chips');

});

$('#candybar').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Candy bar');

});

$('#water').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Water');

});

$('#licorice').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Licorice');

});

$('#pretzels').click(function () {

	var text = $('#item');

	text.val(text.val() + 'Pretzels');

});

$('#plus1usd').click(function () {

	money = money + 1;

	$('#bal').html(money);

});