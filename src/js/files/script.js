// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
import { removeClasses } from "./functions.js";

// import { formsModules } from "./forms/forms.js";


window.onload = function () {

	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover");
			}
		}
		if (targetElement.classList.contains('search-header__icon')) {
			document.querySelector('.search-header__form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-header__form') && document.querySelectorAll('.search-header__form._active').length > 0) {
			removeClasses(document.querySelectorAll('.search-header__form._active'), "_active");
		}

	}
}