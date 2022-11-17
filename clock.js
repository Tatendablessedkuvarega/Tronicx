function clock(){
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM"
  
  if(h== 0){
    h = 12;
  }
  
  if(h > 12){
    h = h -12;
    session = "PM"
  }
  
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s
  
  
  
  let time = h + ":" + m + ":" + s +" "+ session
  document.getElementById('Clock').innerText = time;
  setTimeout(clock , 1000)
}

clock();
//this is for the lunch button

const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick(){
  btn.textContent = 'Gone for Lunch...'
});

function msg(){
  alert('Bye, see you tomorrow!');
}
