


let fetchbtn = document.getElementById("Fetchbtn");
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    const xhr = new XMLHttpRequest();

    console.log("Button Clicked ")

    xhr.open('GET','TEXT.txt',true)

    xhr.onprogress = function (){
        console.log("On Progress")
    }
    xhr.onload = function(){
        if(this.status==200){
        console.log(this.responseText)
         } else{
            console.log("eRROR");
            
         }
        
    }

    xhr.send();

}