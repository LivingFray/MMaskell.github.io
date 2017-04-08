var table;
var scores = {}
var playerRow;
var rows = 0;

updateScores = function(){
	for(var i=0;i<playerRow.cells.length;i++){
		var score = 0;
		for(var j=1;j<table.rows.length - 1;j++){
			var s = parseInt(table.rows[j].cells[i].firstChild.value);
			if(isNaN(s)){
				s = 0;
			}
			score += s;
		}
		table.rows[table.rows.length - 1].cells[i].innerHTML = score;
	}
}

newRow = function(r){
	if(rows < r){
		rows++;
		var row = table.insertRow(table.rows.length-1);
		for(var i=0; i<playerRow.cells.length;i++){
			var cell = row.insertCell(0);
			cell.innerHTML = "<input type=\"number\"></input>"
			cell.onchange = function(){newRow(r+1);updateScores()};
		}
	}
}

onload = function(){
	table = document.getElementById("scores");
	playerRow = table.insertRow(0);
	playerRow.insertCell(0);
}

addPlayer = function(){
	var name = document.getElementById("newName").value;
	document.getElementById("newName").value = "";
	if(name!==""){
		var cell = playerRow.insertCell(playerRow.cells.length-1);
		cell.innerHTML = name;
		cell.id = "playerName"
	}
}

startGame = function(){
	addPlayer();
	if(playerRow.cells.length>2){
		playerRow.deleteCell(playerRow.cells.length-1);
		var row = table.insertRow(table.rows.length);
		for(var i=0; i<playerRow.cells.length;i++){
			var cell = row.insertCell(0);
			cell.innerHTML = "0"
		}
		newRow(1);
		document.getElementById("nameAdder").hidden = true;
	}
}