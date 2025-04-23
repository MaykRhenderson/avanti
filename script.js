const btnMenu = document.getElementById("abrirMenu");
const btnMenuMobile = document.getElementById("abrirMenu2");
const menuContainer = document.getElementById("menu-container");

const categorias = document.getElementById("categorias");
const departamentoLinks = document.querySelectorAll(".nav-item a");
const departamentoContainer = document.getElementById("departamento-container-2");

const input = document.querySelector(".search-box input");
const button = document.querySelector(".btn-search");
const result = document.querySelector(".search-result");

const inputMobile = document.querySelector(".search-box-mobile input");
const buttonMobile = document.querySelector(".btn-search-mobile");
const resultMobile = document.querySelector(".search-result-mobile");

const btnCategories = document.querySelector(".btn-categories");
const burgerMenu = document.querySelector(".burger-menu");

btnCategories.addEventListener("click", () => {
	btnCategories.classList.toggle("toggle-color-button");
	burgerMenu.classList.toggle("toggle-color-button");
});

button.addEventListener("click", () => {
	const searchTerm = input.value.trim();

	if (searchTerm) {
		result.textContent = `Você buscou por: '${searchTerm}'`;
		result.style.display = "block";
	} else {
		result.style.display = "none";
	}
});

buttonMobile.addEventListener("click", () => {
	const searchTerm2 = inputMobile.value.trim();

	if (searchTerm2) {
		resultMobile.textContent = `Você buscou por: '${searchTerm2}'`;
		resultMobile.style.display = "block";
	} else {
		resultMobile.style.display = "none";
	}
});

btnMenu.addEventListener("click", () => {
	menuContainer.classList.toggle("ativo");
	categorias.classList.toggle("ativo");
});

btnMenuMobile.addEventListener("click", () => {
	menuContainer.classList.toggle("ativo");
	categorias.classList.toggle("ativo");
});

departamentoLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		
		const isActive = link.classList.contains("toggle-color-button");

		departamentoLinks.forEach((el) => {
			el.classList.remove("toggle-color-button");
		});

		if (!isActive) {
			link.classList.add("toggle-color-button");
		}
		
		departamentoContainer.classList.toggle("ativo", !isActive);
	});
});

// link.style.color = "#005CFF";
const swiperTop = new Swiper(".swiperTop", {
	direction: "horizontal",
	loop: true,

	slidesPerView: 5,
	slidesPerGroup: 5,

	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	scrollbar: {
		el: ".swiper-scrollbar",
	},

	breakpoints: {
		1024: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
	},
});

const swiper = new Swiper(".swiperBottom", {
	direction: "horizontal",
	loop: true,

	slidesPerView: 5,
	slidesPerGroup: 5,

	pagination: {
		el: ".swiper-pagination",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	scrollbar: {
		el: ".swiper-scrollbar",
	},

	breakpoints: {
		1024: {
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		480: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
	},
});
