const form=document.querySelector('#form');
const Username=document.querySelector('#Username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const Confirmpass=document.querySelector('#Confirmpass');

form.addEventListener('submit',(e)=>{
   
    if(!validateInputs()){
        e.preventDefault();
    } 

})

function validateInputs(){
    const Usernameval= Username.value.trim();
    const emailval= email.value.trim();
    const passwordval= password.value.trim();
    const Confirmpassval= Confirmpass.value.trim();
    let success = true

    if(Usernameval===''){
        success=false;
        seterror(Username,'Username is required')
    }
    else
        setSuccess(Username)


    if(emailval===''){
        success=false;
        seterror(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success=false;
        seterror(email,'Please enter a valid email')
    }

    else{
     setSuccess(email)
    }


    if(passwordval===''){
        success=false;
        seterror(password,'Password is required')
    }
    else if(passwordval.length<8){
        success=false;
        seterror(password,'Password must be 8 characters long')
    }
    else{
     setSuccess(password)
    }


    if(Confirmpassval===''){
        success=false;
        seterror(Confirmpass,'Confirm password is required')
    }
    else if(Confirmpassval!==passwordval){
        success=false;
    seterror(password,'Password does not match')
    }

    else{
     setSuccess(Confirmpass)
    }
    return success;

}

function seterror(element,message){
    const input = element.parentElement;
    const errorElement= input.querySelector('.error')

     errorElement.innerText = message;
     input.classList.add('error')
     input.classList.remove('success')
}

function setSuccess(element){
    const input = element.parentElement;
    const errorElement= input.querySelector('.error')
     errorElement.innerText = '';
     input.classList.add('success')
     input.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };