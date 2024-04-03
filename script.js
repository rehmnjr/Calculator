let input = document.getElementById('inputbox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
button.addEventListener('click',(e) =>{
  if(e.target.innerHTML =='='){
    if(string !=""){
    string = eval(string);
    
    input.value=string;
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


document.addEventListener('keydown', function(event) {
   
  if ((event.key >= '0' && event.key <= '9') || event.key === '.') {
      string += event.key;
      input.value = string;
  } 

  else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%' || event.key === '=' ||  event.key === 'Enter' ||  event.key === 'Backspace' ||  event.key === 'Escape') {
   
      if (event.key === '=') {
          string = eval(string);
          input.value = string;
      } else if (event.key === 'Enter') {
        if(string !=""){
          string = eval(string);
          input.value=string;
        }
      } else if (event.key === 'Backspace') {
          string = string.substring(0, string.length - 1);
          input.value = string;
      } else if (event.key === 'Escape') {
          string = "";
          input.value = string;
      }
       else {  
          string += event.key;
          input.value = string;
        }
 
  }

  else {
      event.preventDefault();
  }
 
  updateDisplay();
});


