let slideIndex = 0;
const slideInterval = 4*1000; // Interval between slides in milliseconds

function showSlides() {
	const container = document.querySelector('.carousel-container');
	const slides = document.querySelectorAll('.carousel-image-wrapper');
	const totalSlides = slides.length;

	slideIndex++;
	if (slideIndex >= totalSlides) {
		slideIndex = 0;
	}

	const slideWidth = slides[0].clientWidth;
	const offset = -slideIndex * slideWidth;
	container.style.transform = `translateX(${offset}px)`;

	setTimeout(showSlides, slideInterval); // funne recursion for looping
}

showSlides();

function loadTeamMembers() {

	const members = [
		{
			name: "Saran Hai",
			designation: "Operation Director",
			image: "./assets/team/hai.png"
		},
		{
			name: "Kiran Amin",
			designation: "Operation Director",
			image: "./assets/team/amin.png"
		},
		{
			name: "Annus Usman",
			designation: "Operation Director",
			image: "./assets/team/usman.jpg"
		},
		{
			name: "Hamna Nadeem",
			designation: "Content Director",
			image: "./assets/team/nadeem.png"
		},
		{
			name: "Sanjana Kirshan",
			designation: "Creative Director",
			image: "./assets/team/kirshan.png"
		},
		{
			name: "M.Sohaib",
			designation: "Creative Director",
			image: "./assets/team/sohaib.png"
		},
		{
			name: "Haroon Abasi",
			designation: "Technical Director",
			image: "./assets/team/abasi.png"
		},
		{
			name: "Huzaifa Ghori",
			designation: "Technical Director",
			image: "./assets/team/ghori.png"
		},
		{
			name: "Huzaifa Tanzeel",
			designation: "Outreach Director",
			image: "./assets/team/tanzeel.png"
		},
		{
			name: "Mehwish Alam",
			designation: "Outreach Director",
			image: "./assets/team/alam.png"
		},
		{
			name: "Areesha Siddiqui",
			designation: "Marketing Director",
			image: "./assets/team/siddiqui.png"
		}
	];

	const showcases = document.getElementsByClassName("team-showcase");

	Array.from(showcases).forEach((showcase, index) => {

		const img = showcase.getElementsByClassName("team-image")[0];
		const name = showcase.getElementsByClassName("team-name")[0];
		const designation = showcase.getElementsByClassName("team-designation")[0];

		const member = members[index];

		img.setAttribute("src", member.image);
		img.setAttribute("alt", `Team Member - ${member.name}`);
		name.innerText = member.name;
		designation.innerText = member.designation;

	});
}

loadTeamMembers();

function loadShowcasePage(pageNumber) {
	const pages = [
		[
			{
				name: "Saran Hai",
				designation: "Operation Director",
				image: "./assets/team/hai.png"
			},
			{
				name: "Kiran Amin",
				designation: "Operation Director",
				image: "./assets/team/amin.png"
			},
			{
				name: "Annus Usman",
				designation: "Operation Director",
				image: "./assets/team/usman.jpg"
			},
			{
				name: "Hamna Nadeem",
				designation: "Content Director",
				image: "./assets/team/nadeem.png"
			},
		],
		[
			{
				name: "Sanjana Kirshan",
				designation: "Creative Director",
				image: "./assets/team/kirshan.png"
			},
			{
				name: "M.Sohaib",
				designation: "Creative Director",
				image: "./assets/team/sohaib.png"
			},
			{
				name: "Haroon Abasi",
				designation: "Technical Director",
				image: "./assets/team/abasi.png"
			},
			{
				name: "Huzaifa Ghori",
				designation: "Technical Director",
				image: "./assets/team/ghori.png"
			},
		],
		[
			{
				name: "Huzaifa Tanzeel",
				designation: "Outreach Director",
				image: "./assets/team/tanzeel.png"
			},
			{
				name: "Mehwish Alam",
				designation: "Outreach Director",
				image: "./assets/team/alam.png"
			},
			{
				name: "Areesha Siddiqui",
				designation: "Marketing Director",
				image: "./assets/team/siddiqui.png"
			}
		]
	];
	const page = pages[pageNumber-1];

	let previousPageNumber;
	let nextPageNumber;

	if (pageNumber === 1) {
		previousPageNumber = 3;
		nextPageNumber = 2;
	} else if (pageNumber === 2) {
		previousPageNumber = 1;
		nextPageNumber = 3;
	} else if (pageNumber === 3) {
		previousPageNumber = 2;
		nextPageNumber = 1;
	} else {
		previousPageNumber = 3;
		nextPageNumber = 2;
	};

	const showcaseWrapper = document.getElementById("team-showcase-wrapper");

	Array.from(showcaseWrapper.children).forEach(child => {
		child.remove();
	});

	const previousButton = element("button", "team-showcase-previous-button tsb", {id: "previous-button", onclick: `loadShowcasePage(${previousPageNumber})`}, "<");
	const nextButton = element("button", "team-showcase-next-button tsb", {id: "next-button", onclick: `loadShowcasePage(${nextPageNumber})`}, ">");

	showcaseWrapper.appendChild(previousButton);

	page.forEach(member => {

		const showcase = element("div", "team-showcase");

		const img = element("img", "team-image", {src: member.image, alt: `Team Member - ${member.name}`});
		const name = element("div", "team-name", null, member.name);
		const designation = element("div", "team-designation", null, member.designation);

		appendChildren(showcase, [img, name, designation]);

		showcaseWrapper.appendChild(showcase);

	});

	showcaseWrapper.appendChild(nextButton);
}

function changeNews(n) {
	const newsOptions = [
		{
			subtitle: "MLSA",
			description: "We are delighted to announced that MLSA-Karachi work as an outreach partner in JTECH 2024 by Department of computer science & software engineering in Jinnah University fo Women.",
			image: "./assets/news/mlsa.gif"
		},
		{
			subtitle: "Github Field Day",
			description: "What is Github field day?\n" +
				"Field day brings together student leaders from " +
				"from different regional communities to hang " +
				"out.",
			image: "./assets/news/github.gif"
		}
	];

	const news = newsOptions[n];

	let nxel = n+1;
	if (nxel > (newsOptions.length-1)) nxel = 0;

	document.getElementById("headline-subtitle").innerText = news.subtitle;
	document.getElementById("headline-description").innerText = news.description;
	document.getElementById("change-news-button").setAttribute("onclick", `changeNews(${nxel})`);
	document.getElementById("news-image").setAttribute("src", news.image)

}