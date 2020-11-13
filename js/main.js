var cards = document.querySelectorAll('.card'),
slots = document.querySelectorAll('.slot');


// cards.forEach( card => {
// 	card.addEventListener('dragstart', function(e) {
// 		var that = this;
// 		setTimeout(function() {
// 			that.classList.add('dragging');
// 		}, 0);
		
// 	})
// 	card.addEventListener('dragend', function(e) {
// 		this.classList.remove('dragging');
// 	})
// 	card.addEventListener('dragdrop', function(e) {
// 		this.classList.remove('dragging');
// 	})
// })

slots.forEach( slot => {
	slot.addEventListener('dragover', function(e) {
		e.preventDefault();
	})
	slot.addEventListener('drop', function(e) {
		e.preventDefault();
		var card = document.querySelector('.dragging');
		if(this === card.parentNode){
			return;
		}
		const afterElement = getAfterDragElement(this, e.clientY);
		this.appendChild(card);
	})
})

function getAfterDragElement(container, y) {
	const draggableElements = [...container.querySelectorAll('[draggable]:not(.dragging)')];
	draggableElements.reduce( (closest, child) => {
		const box = child.getBoundingClientRect();
	}, {offset: Number.POSITIVE_INFINITY})
}