/*var formattedName1 = '<div class = "col-xs-6 catName"><h1>' + cat1Name + '</h1></div>'
var formattedName2 = '<div class = "col-xs-6 catName"><h1>' + cat2Name + '</h1></div>'
$('#catName').append(formattedName1)
	.append(formattedName2);*/

var formattedImg1 = '<div class= "col-xs-6"><img class = "cat1" src="img/cat1.jpg" alt="Cat: Andy">';
var formattedImg2 = '<div class= "col-xs-6"><img class = "cat2" src="img/cat2.jpg" alt="Cat: Johny">';

$('#img-container').append(formattedImg1)
	.append(formattedImg2);

$('#click-count').append('<div class="col-xs-6" id = "count1"></div>');
$('#click-count').append('<div class="col-xs-6" id = "count2"></div>');

$('.cat1').click(function(event) {
	console.log("the cat1 has been clicked!");
	if (cat1Count === 0) {
		$('#count1').append('<p>' + cat1Count + '</p>');
		cat1Count += 1;
	}
	
	if (cat1Count > 0) {
		$('#count1').replaceWith('<div class="col-xs-6" id = "count1"><p>' + cat1Count + '</p></div>');
		cat1Count += 1;
	}
});

$('.cat2').click(function(event) {
	console.log("the cat2 has been clicked!");
	if (cat2Count === 0) {
		$('#count2').append('<p">' + cat2Count + '</p>');
		cat2Count += 1;
	}
	
	if (cat2Count > 0) {
		$('#count2').replaceWith('<div class="col-xs-6" id = "count2"><p>' + cat2Count + '</p></div>');
		cat2Count += 1;
	}
});

// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

    // This is the number we're on...
    var num = nums[i];

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = num;

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    document.body.appendChild(elem);
};