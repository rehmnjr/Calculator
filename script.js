let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');
//Virtual KeyBoard Event Functionality
let string = "";
let arr = Array.from(button);
arr.forEach(button => {
button.addEventListener('click',(e) =>{
  if(e.target.innerHTML =='='){
    if(string !=""){
    string = eval(string);
    
    input.value=string;
  }
  else if (e.target.innerHTML === '+' || e.target.innerHTML === '-' || e.target.innerHTML === '*' || e.target.innerHTML === '/' || e.target.innerHTML === '%' || e.target.innerHTML === '=' && string !="") {
     
    if (isOperator(string[string.length - 1])) {
  
        string = string.slice(0, -1) + e.target.innerHTML;
    } else {
        string += e.target.innerHTML;
    }
    input.value = string;
}

  }
  else if (e.target.innerHTML== 'AC'){
    string="";
    input.value=string;
  }
  else if (e.target.innerHTML=="DEL"){
    string =string.substring(0, string.length-1);
    input.value=string;
  }

  else{
  string+=e.target.innerHTML;
  input.value=string;
}
updateDisplay();
  })
});

function updateDisplay() {
  const display = document.getElementById('inputbox');

  display.scrollLeft = display.scrollWidth;
}

//KeyBoard Event Functionality

document.addEventListener('keydown', function(event) {
 
  if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === '-')  {
      string += event.key;
      input.value = string;
  } 

  else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%' || event.key === '=' && string !="") {
     
      if (isOperator(string[string.length - 1])) {
    
          string = string.slice(0, -1) + event.key;
      } else {
          string += event.key;
      }
      input.value = string;
  }
 
  else if (event.key === 'Enter') {
    if(string !=""){
      string = eval(string);
      input.value=string;
    }
  } else if (event.key === 'Backspace') {
    if(string !=""){
      string = string.substring(0, string.length - 1);
      input.value = string;
    }
  } else if (event.key === 'Escape') {
    if(string !=""){
      string = "";
      input.value = string;
    }
  }

  else {
      event.preventDefault();
  }

  updateDisplay();
});

function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/' || char === '%';
}
