const scrollerInner = document.querySelector('.scroller__media__inner')
const scrollerContent = Array.from(scrollerInner.children)

scrollerContent.forEach( item  =>{
		const duplicatedItem = item.cloneNode(true)
		duplicatedItem.setAttribute('aria-hidden', true)
		scrollerInner.appendChild(duplicatedItem)
	}
)

