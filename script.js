const btnMenu = document.getElementById("abrirMenu");
const btnMenuMobile = document.getElementById("abrirMenu2");
const menuContainer = document.getElementById("menu-container");
const categorias = document.getElementById("categorias");
const departamentoLinks = document.querySelectorAll(".nav-item a");
const departamentoContainer = document.getElementById("departamento-container-2");

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
		departamentoContainer.classList.toggle("ativo");
	});
});

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
			spaceBetween: 15,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		480: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 15,
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
