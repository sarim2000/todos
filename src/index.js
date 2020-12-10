const main = document.getElementById('main-container');
const btn = document.getElementById('tasks');
// const list = document.createElement('section');
const frm = document.getElementById('frm');
const modalx = document.getElementById('des');
const lists = [];
const expand = document.getElementById('expand');
const subtasks = document.getElementById('subtasks');

// let itemsArray = localStorage.getItem('lists')
//   ? JSON.parse(localStorage.getItem('lists'))
//   : lists

//   localStorage.setItem('lists', JSON.stringify(itemsArray))
//   const data = JSON.parse(localStorage.getItem('lists'))
  
const s = [];


frm.addEventListener('submit',e => {
  e.preventDefault();
  
  
  const name = btn.value;
  
  render(name);
  btn.value = "";
  
});






function render(name){
    
    const h = document.createElement('li');
      
    
    h.innerHTML = name;
    
    const task = document.createElement('section');
    task.setAttribute('class','task-lists');
    task.appendChild(h)
    s.push(h);
    
    for (let j = 0; j < s.length; j++){
      if (s[j]){
        s[j].addEventListener('click',chk);
      }
    }
    
    

    const button = document.createElement('button');
    button.setAttribute('class','del');
    const img = document.createElement('img');
    img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTkuMzQyIDE5LjM0MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTkuMzQyIDE5LjM0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMi44MzMsNC40OTFjMCwwLDAuNTEzLDAuNDkxLDAuNTEzLDAuNzc2djEyLjU2OGMwLDAuODMyLDAuNzM2LDEuNTA3LDEuNjQ1LDEuNTA3aDkuMzYyDQoJCQljMC45MDgsMCwxLjY0NC0wLjY3NSwxLjY0NC0xLjUwN1Y1LjI2OGMwLTAuMjg2LDAuNTE1LTAuNzc2LDAuNTE1LTAuNzc2VjIuOTY5SDIuODMzVjQuNDkxeiBNMTIuMzYsNi4yM2gxLjIyM3Y5LjcwNUgxMi4zNlY2LjIzeg0KCQkJIE05LjA4Niw2LjIzaDEuMjJ2OS43MDVoLTEuMjJWNi4yM3ogTTYuMTM3LDYuMjNoMS4yMjF2OS43MDVINi4xMzdWNi4yM3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAzMDEwNDsiIGQ9Ik0xNy4xMDgsMS43MTFoLTMuNzkxQzEzLjEyOCwwLjc0LDEyLjIwMSwwLDExLjA4NywwSDguMjU3QzcuMTQzLDAsNi4yMTYsMC43NCw2LjAyNywxLjcxMUgyLjIzNQ0KCQkJdjAuOTNoMTQuODczVjEuNzExeiBNNy4yOTcsMS43MTFjMC4xNTYtMC4zNDQsMC41MjgtMC41ODYsMC45Ni0wLjU4NmgyLjgyOWMwLjQzMywwLDAuODA0LDAuMjQzLDAuOTYxLDAuNTg2SDcuMjk3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    img.style.height = "20px";
    button.appendChild(img);
    
    task.appendChild(button);
    
    
    lists.push(task);
    for (let i = 0; i < lists.length; i++){
        // func(i);
        button.addEventListener('click',func);
        main.appendChild(lists[i]);
    }
};


function func(){
  const x = this.parentNode;
  const find = x.innerText;
  lists.forEach(myfunc);
  function myfunc(item){
    if (item.innerText == find){
      const x1 = lists.indexOf(item);
      lists.splice(x1,1);
      // itemsArray = lists;
    }
  }
  
  x.parentNode.removeChild(x);
};
const modal = document.getElementById('modal');


function chk(){
  if (this.classList.contains('act')){
    this.classList.remove('act');
  }
  else{
    this.classList.add('act');
  }
}



