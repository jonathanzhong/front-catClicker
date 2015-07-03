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
				formattedName[i] = '<button class="button'+ i +'">'+ model[i].name +'</button>';
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
			for (var i = 0; i < modle.length; i++) {

			}
		},
		bindButtonToCat: function() {
			for (var i = 0; i < model.length; i++ ) {
				function() {
					
				}
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
			for (var i = 0; i < model.length; i++) {
				catView.append('<div class="cat" id="cat'+ i +'">'+ catViewContent[i] +'</div>');
			}
			$('.cat').hide();
			$('#cat0').show();
		}


	}
	
	view.renderCatList();
	view.renderCatView();
	

})