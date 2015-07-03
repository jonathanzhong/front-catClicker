$(function() {


	var model = [
	{
		name: "Andy",
		imgUrl: "img/cat1.jpg",
		clickCount: 0
	},
	{
		name: "Johny",
		imgUrl: "img/cat2.jpg",
		clickCount: 0
	},
	{
		name: "Anna",
		imgUrl: "img/cat3.jpg",
		clickCount:0
	},
	{
		name: "Brick",
		imgUrl: "img/cat4.jpg",
		clickCount:0
	},
	{
		name: "Chris",
		imgUrl: "img/cat5.jpg",
		clickCount:0
	}
	]


	var octopus = {
		getName: function() {
			//Trick: formattedName should not be declared inside the for loop.
			var formattedName = [];
			for (var i = 0; i < model.length; i++) {
				formattedName[i] = '<button id="button'+ i +'">'+ model[i].name +'</button>';
				console.log(formattedName);
			}
			return formattedName;
		},
		getUrl: function() {
			var formattedImg = [];
			for (var i = 0; i < model.length; i ++) {
				formattedImg[i] =  '<img src="'+ model[i].imgUrl +'">';
				console.log(formattedImg);
			}
			return formattedImg;
		},
		getCount: function() {
			var formattedCount = [];
			for (var i = 0; i < model.length; i++) {
				formattedCount[i] = '<span class="counter">'+ model[i].clickCount +'</span><p>clicks</p><br>';
			}
			return formattedCount;
		},
		listenButton: function() {
			var bindButtonToCat = function(idNumber) {
				$("#button"+idNumber).click(function() {
					$('.cat').hide();
					$("#cat"+idNumber).show();
				})
			};
			for (var i = 0; i < model.length; i++ ) {
				bindButtonToCat(i);
			}

		},
		listenImage: function() {
			var bindImageToCount = function(idNumber) {
				var cat = "#cat" + idNumber
				$(cat).click(function() {
					var count = $(cat+" >.counter").text();
					count = parseInt(count) + 1;
					$(cat+" >.counter").text(count);
				})
			};
			for (var i = 0; i < model.length; i++) {
				bindImageToCount(i);
			}
		}
		
	}


	var view = {
		renderCatList: function() {
			var catList = $('#catList');
			var buttonContent = [];
			buttonContent = octopus.getName();
			console.log(buttonContent);
			for (var i = 0; i < model.length; i++) {
				catList.append(buttonContent[i]);
			}
		},
		renderCatView: function() {
			var catView = $('#catView');
			var catViewContent = octopus.getUrl();
			var catViewCount = octopus.getCount();
			for (var i = 0; i < model.length; i++) {
				catView.append('<div class="cat" id="cat'+ i +'">'+ catViewCount[i] + catViewContent[i] +'</div>');
			}
			$('.cat').hide();
			$('#cat0').show();
		}


	}
	
	
	view.renderCatList();
	view.renderCatView();
	octopus.listenButton();
	octopus.listenImage();

});