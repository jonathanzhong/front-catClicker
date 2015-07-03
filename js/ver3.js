/**********
   CATS
**********/

var Cat = ["Andy", "Johny", "Anna", "Brick", "Chris"];
var catUrl = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg", "img/cat5.jpg"]

for (var i = 0, len = Cat.length; i < len; i++) {

	var formattedName = [];
	var catName = [];
	catName[i] = "cat" + i;
	console.log(catName);

	formattedName[i] = '<div class = "col-xs-6 "><button class="'+ catName[i] +'">' + Cat[i] + '</button></div>';

	$('#cat').append(formattedName[i]);

	var formattedImg = [];

	formattedImg[i] =  '<img class ="imgToggle" src="'+ catUrl[i] +'" style="display:none">';
	console.log(formattedImg);
	$('#cat').append(formattedImg[i]);

	$(":button").click((function(Cat) {
		return function() {
			$('.imgToggle').toggle();
		}
	})(Cat));

	$(".imgToggle").click((function(Cat) {
		return function() {
			$
		}
	}))



	//$('').click(function())
}