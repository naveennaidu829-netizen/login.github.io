function submit(){
    let name=document.getElementById("user").value;
    let password=document.getElementById("password").value;
    let message=document.getElementById("message")

    if(name==="naveen"&& password==="1234@rare"){
        message.innerText="Login successfull"
        message.style.color="green"

    }else{
         message.innerText="Login error!"
        message.style.color="red"
    }
    
}