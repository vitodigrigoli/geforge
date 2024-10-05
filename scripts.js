const scrollerInner = document.querySelector('.scroller__media__inner')
const scrollerContent = Array.from(scrollerInner.children)

scrollerContent.forEach( item  =>{
		const duplicatedItem = item.cloneNode(true)
		duplicatedItem.setAttribute('aria-hidden', true)
		scrollerInner.appendChild(duplicatedItem)
	}
)

gsap.registerPlugin(ScrollTrigger)
const splitTypes =  document.querySelectorAll('.text__body > *')
splitTypes.forEach( (char, i) => {
	const text = new SplitType(char, {types:'chars, words'})
	
	gsap.from(text.chars, {
		scrollTrigger: {
			trigger: char,
			scrub: true,
			start: 'top 35%',
			end: 'bottom 35%'
		},
		transformOrigin: 'top',
		stagger: 0.1,
		opacity: 0.2,

	})
})
/*
const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
*/