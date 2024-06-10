const form = document.getElementById('form');

function handleSubmit(e) {
  e.preventDefault();
  
  let data ;
  const error=document.getElementById("error");
  const fields = e.target.querySelectorAll("input");
  const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  for (const field of fields) {
    data = field.value;
  }
  if(!pattern.test(data))
  {
    error.innerHTML="Valid email required";
    return false;
  }
  else{
    error.innerHTML=" ";
  }
  
  console.log(data);
}


form.addEventListener('submit', handleSubmit);