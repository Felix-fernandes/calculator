let num=[...document.querySelectorAll(".num")]
let operacao=[...document.querySelectorAll(".op")]
let display=document.querySelector(".display")
let clean=document.querySelector("#clean")
let res=document.querySelector(".res")
let copy=document.querySelector("#tcpy")

let sinal=false
let decimal=false

num.map((el)=>{
    el.addEventListener("click",(evt)=>{

        if(display.innerHTML=="0"){

            if(evt.target.innerHTML==","){

                display.innerHTML="0."
                decimal=true

            }
            else{

                display.innerHTML=""

            }
        }

        if(evt.target.innerHTML==","){

            
            if(!decimal){
            decimal=true
            
            display.innerHTML+="."
            }
           
        }
        else{
            display.innerHTML+=evt.target.innerHTML 
            sinal=false   
        }
              
    })
})

operacao.map((el)=>{
    el.addEventListener("click",(evt)=>{
        decimal=false
        if(sinal==false){
            if(evt.target.innerHTML=="x"){

                display.innerHTML+="*"
                sinal=true
            }
            else{
                display.innerHTML+=evt.target.innerHTML
                sinal=true

            }
        }

        if(sinal==true){
            display.innerHTML=display.innerHTML
           }
    })
})

clean.addEventListener("click",(evt)=>{
    display.innerHTML="0"
    decimal=false
})

res.addEventListener("click",(evt)=>{
  let e=display.innerHTML
  console.log(e)
  display.innerHTML=eval(e)  
})

copy.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})