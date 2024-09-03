const buttons=document.querySelectorAll('button');
let inp=document.getElementById('calc');
for(let btn of buttons){
     btn.addEventListener('click',(e)=>{
        const btntext= e.target.innerText;


        if(btntext==='C'){
            inp.value="";
        }
        else if(btntext=== 'x'){
            inp.value+='*';

        }
        else if (btntext==='143'){
            inp.value='vaishnavi';
        }
        else if(btntext=== '='){
           try{ inp.value=eval(inp.value);
           }
           catch(e){
               inp.value='Invalid Operation'
           }
        }
        else{
            inp.value+=btntext;
        }



     })

 }
