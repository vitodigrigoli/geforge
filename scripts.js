gsap.registerPlugin(ScrollTrigger);

const init = () =>{

	const scrollerInner = document.querySelector('.scroller__media__inner')
	const scrollerContent = Array.from(scrollerInner.children)
	
	scrollerContent.forEach( item  =>{
			const duplicatedItem = item.cloneNode(true)
			duplicatedItem.setAttribute('aria-hidden', true)
			scrollerInner.appendChild(duplicatedItem)
		}
	)
	
	const splitTypes =  document.querySelectorAll('.text__content > *')
	splitTypes.forEach( (char, i) => {
		const text = new SplitType(char, {types:'chars, words'})
		
		gsap.from(text.chars, {
			scrollTrigger: {
				trigger: char,
				scrub: true,
				start: 'top 35%',
				end: 'bottom 35%',

			},
			transformOrigin: 'top',
			stagger: 0.1,
			opacity: 0.2,
	
		})
	})


	  

}



window.addEventListener('load', () => {
	// Initialize a new Lenis instance for smooth scrolling
	const lenis = new Lenis({
		smooth: true,
		lerp: 0.1, // Regola la velocità dello smoothing
	});

	// Listen for the 'scroll' event and log the event data to the console
	lenis.on('scroll', (e) => {
	});

	// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
	lenis.on('scroll', ScrollTrigger.update);

	// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
	// This ensures Lenis's smooth scroll animation updates on each GSAP tick
	gsap.ticker.add((time) => {
	lenis.raf(time * 1000); // Convert time from seconds to milliseconds
	});

	// Disable lag smoothing in GSAP to prevent any delay in scroll animations
	gsap.ticker.lagSmoothing(0);

	init();

})
