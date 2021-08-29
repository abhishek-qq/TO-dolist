



const inputBox = document.querySelector(".inputField input");
const inputBtn = document.querySelector(".inputField button");

inputBox.onkeyup = ()=>{
	let userData =inputBox.value; // here we want user to enter the todo task 
	if(userData.trim() !=0) {
		inputBtn.classList.add("active");
	}
	else{
		inputBtn.classList.remove("active");
	}
}


// now if user click on the button to add new task 

inputBtn.onclick = () => {
	let userData =inputBox.value;// asking user to enter the new todo 
	let getLocalStorage = localStorage.getItem("New Todo");//getting the data from local storage 

	if(getLocalStorage == null){   //if local storage is null 

		listArr =[];  //creating a blank array;

	}
	else{

		listArr = JSON.parse(getLocalStorage);  //conerting the json string itno js object 

	}
	listArr.push(userData); // adding the new todo in array
	localStorage.setItem("New Todo",JSON.stringify(listArr));  // converting json object into string 
}


function showTask(){
	let getLocalStorage = localStorage.getItem("New Todo"); // getting data from local storage
	if(getLocalStorage==null){
		listArr=[];
	}
	else{
		listArr=JSON.parse(getLocalStorage);  // converting the data from json to js object  

	}
	
}