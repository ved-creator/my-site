document.addEventListener("DOMContentLoaded", function() {

	var menu_button = document.querySelector('.main-nav__toggle');
	var menu = document.querySelector('.main-nav');

	menu_button.addEventListener('click', function(e){
		e.preventDefault();
		if(menu.classList.contains('main-nav--active')){
			menu.classList.remove('main-nav--active');
			menu_button.classList.remove('toggle--active');
		}else{
			menu.classList.add('main-nav--active');
			menu_button.classList.add('toggle--active');
		}
	});

});
