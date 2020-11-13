var fetchTasks = function() {
	for (var i = 0; i <= window.tasks.data.length - 1; i++) {
		createTask(window.tasks.data[i]);
	}
},
createTask = function(task) {
	var card = document.createElement('div');
	card.className = 'card';
	card.setAttribute('draggable', true);
	card.innerHTML = document.getElementById('card-template').innerHTML;
	card.querySelector('.priority-bar').setAttribute('priority', task.priority);
	card.querySelector('.card-title').innerHTML = task.title;
	card.querySelector('.due-date').innerHTML = task.due_date;//(new Date(task.due_date)).toLocaleDateString();
	document.querySelector('.slot:nth-child(' + task.status + ')').appendChild(card);

	card.addEventListener('dragstart', function(e) {
		var that = this;
		setTimeout(function() {
			that.classList.add('dragging');
		}, 0);
		
	})
	card.addEventListener('dragend', function(e) {
		this.classList.remove('dragging');
	})
	card.addEventListener('dragdrop', function(e) {
		this.classList.remove('dragging');
	})
},
updatePosition = function(card, position) {
	var item = (window.task.data || []).find( item => {
		return item.title === card.querySelector('.title').innerHTML.trim();
	})
	if(item){
		item.status = position;
	}
},
editTask = function(task) {

},
deleteTask = function() {

},
createTaskForm = function(){
	var modal;
	if(!document.getElementById('taskForm')){
		modal = document.createElement('div');
		modal.className = 'modal-bg';
		modal.id = 'taskForm';
		modal.innerHTML = document.getElementById('modal-template').innerHTML;
		modal.querySelector('#cancel').onclick = closeForm;
		document.body.appendChild(modal);
	}
	document.getElementById('title').value = '';
	openForm();
},
openForm = function() {
	console.log('open modal');
	if(!document.getElementById('taskForm')){
		return;
	}
	document.getElementById('taskForm').style.display = 'flex';
	setTimeout(function() {
		document.body.setAttribute('modal-open', true);
	}, 300);
},
closeForm = function() {
	if(!document.getElementById('taskForm')){
		return;
	}
	document.body.removeAttribute('modal-open');
	setTimeout(function() {
		document.getElementById('taskForm').style.display = 'none';
	}, 300);
},
validateForm = function() {

},
submitForm = function(edit) {
	
}

if(document.readyState === 'complete'){
	fetchTasks();
}else {
	window.addEventListener('load', fetchTasks);
}