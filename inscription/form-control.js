var form = document.querySelector("form");
var pseudo = document.querySelector("#fpseudo");
var password = document.querySelector("#fpassword");
var confirm = document.querySelector("#fconfirm");
var mail = document.querySelector("#fmail");

var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


form.addEventListener("submit",(event)=>{
  
 if(!elemePseudo() || elemePassword() || elemeConfirm() || elemEmail()){
  event.preventDefault()
  
 }
 alert("On envoie le formulaire")
})

pseudo.addEventListener("invalid",()=>{
  elemePseudo()
})
pseudo.addEventListener("change",()=>{
  elemePseudo()
})
password.addEventListener("invalid",()=>{
  elemePassword()
})
password.addEventListener("change",()=>{
  elemePassword()
})
confirm.addEventListener("invalid",()=>{
  elemeConfirm()
})
confirm.addEventListener("change",()=>{
  elemeConfirm()
})
mail.addEventListener("invalid",()=>{
  elemEmail()
})
mail.addEventListener("change",()=>{
  elemEmail()
})
function elemePseudo(){
  if (pseudo.value.length < 3 || pseudo.value.length > 12) { 
    inputNotok(pseudo, "Le pseudo doit avoir entre 3 et 12 caractères.")

    return false
  } else {
    inputOk(pseudo)
    return true;}
 }
function elemePassword(){

  if (password.value.length < 6 || password.value.length > 20){
    inputNotok(password, "Le mot de passe doit avoir entre 6 et 20 caractères.")

  }
  else {
    inputOk(password);
  
    return true;}
 
}
function elemeConfirm(){
 if (confirm.value !== password.value){
    inputNotok(confirm, "La confirmation doit être identique au mot de passe.")
 
  }
  else {
    inputOk(confirm)
    return true;}

  }
  function elemEmail(){
   
  if (!mail.value.match(regex)){
    inputNotok(mail, "L'adresse email n'est pas valide.")
  }
  else {
    inputOk(mail)
    return true;}
  }
  
 function inputOk(input){
  input.style.border ="3px solid green";
  // input.setAttribute("autocomplete", "off");
 
  // input.style.background =" aliceblue";

  let errorDiv = input.nextElementSibling;
  errorDiv.classList.add('invisible')
}
function inputNotok(input, errorMsg){
  input.style.border ="3px solid red "; 
  // input.blur();
  // input.style.background =" red ";
 
  let errorDiv = input.nextElementSibling;
  errorDiv.innerHTML=errorMsg;
  errorDiv.classList.remove('invisible')
 }