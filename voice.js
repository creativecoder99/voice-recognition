let btn= document.querySelector("button");
let userText=document.querySelector("input");
let msg=new SpeechSynthesisUtterance();
btn.addEventListener("click",()=>{
    if(userText.value == ""){
        msg.text="please enter the text you wantto be typed in or youwant to be typed in ";
    }
    else{
        msg.text= usertext.value;
    }
    window.speechSynthesis.speak(msg);
});