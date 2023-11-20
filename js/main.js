window.addEventListener('scroll' , function (){
    const header = document.querySelector('nav');
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.querySelector('.threaLine').onclick = function(){
    document.querySelector('nav').classList.toggle('smallScrean');
}

//typed in Home page

const type = new Typed(".TVShow", {
	strings: [
		"<span>Fotbooll<span>.</span> </span> ",
		"<span>IPTV<span>.</span> </span> ",
		"<span>netflix<span>.</span>  </span>",
		"<span>HBO<span>.</span>  </span>",
	],
	typeSpeed: 130,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
});