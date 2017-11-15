'use stric'
let text;
let time;
let date;
const addBtn; 
const clearBtn;
const btnDelet;

addNoteBtn = document.getElementById('addNote');
addNoteBtn.addEventListener('click', addNote);

function noteModule(containerElement) {

	//בדיקות
	return new creatNote(text, time, date);

	function creatNote(text, time, date) {
		this.text = text;
		this.time = time;
		this.date = date;
		this.deletNote = deletNote;
	}

	function appendTodoNote(note) {
		return addNote(note);
	}

	function addNote(note) {
		const newElement = document.createElement('div');
		newElement.innerHTML = "<textarea>" + note.text + "</textarea>" + "<time>" + note.time + note.date + "</time>";
		
		const btnDelet = document.createElement('button');
		btnDelet.className = "Delet Note";
        btnDelet.addEventListener('click', deletNote);
        console.log()
        btn.innerHTML = task.status ;
        newElement.appendChild(btn);
		document.getElementById(containerElement).appendChild(newElement);
	}

	function deletNote() {
		
	}

 function updateNote() {}
	
	
	return {
		addNote: addNote,
		deleteNote: deletNote,
		updateNote: updateNote
	}
}
var t = noteModule('container');
t.addNote("text");


document.addEventListener("click", function (e) {
	e.preventDefault();

	var n = noteModule("content");

	let userText = document.getElementById("textNote").value;
	let userDate = document.getElementById("date").value;
	let userTime = document.getElementById("time").value;
	
	let userBtn = btnDelet.innerHTML('daletNote');
	btnDelet.addEventListener('click', deletNote);


	var printTask = n.creatNote(userText, userTime, userDate);
	n.appendTodoNote(printTask);
})