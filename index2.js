let counter = 1;
let box1 = null; let box2 = null;
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));


function sortIt(array, divarray, amount , speed){
    
    for(let x = 0; x<amount;x++){
        for(let y = 0; y<amount;y++){
           
            //if( Number(array[y].style.height.substring(0,5)) > Number(array[x].style.height.substring(0,5)) ){
                
            hope(array, divarray, y,x,speed);
            //dope(divarray,y,x,speed);
            
               
        }
    }
    divarray[box1].style.background = "#edf3f8";
    divarray[box2].style.background = "#edf3f8";
}

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let input4 = document.querySelector(".input4");
let createbtn = document.querySelector(".button");
createbtn.addEventListener("click",create);
let welcomebtn = document.querySelector("#welcomebtn");
welcomebtn.addEventListener("click",()=>{
    document.querySelector(".welcome").classList.add("inv");
});
let array1 = [];
let array2 = [];
let narray = [];

async function dope(divarray,y,x,speed){
    await sleep(counter++ * (1100/speed));
    if(array[y] > array[x]){   
    divarray[x].style.background = "blue";
    divarray[y].style.background = "blue";
    }
}

async function hope(array,divarray,y,x,speed) {
    
    await sleep(counter++ * (1000/speed));
    
    if(array[y] > array[x]){      
        if(box1!= null&&box2!=null){
            divarray[box1].style.background = "#edf3f8";
            divarray[box2].style.background = "#edf3f8";
        }
        
        divarray[x].style.background = "red";
        divarray[y].style.background = "red";


        let nbox = array[y];
        divarray[y].firstChild.textContent = array[x];
        array[y] = array[x];
        divarray[x].firstChild.textContent = nbox;
        array[x] = nbox;
 
        let divbox = String(array[x]+"px");
        divarray[y].style.height = divarray[x].style.height;
                     
        divarray[x].style.height = divbox;
                     
        console.log(y + " switched with " + x);

        box1 = y; box2 = x;
        

        
                
    }
    
   
 }

function create(){

    if(createbtn.classList.contains("working"))
    {
        let amount = input1.value;
        let min = input2.value;
        let max = input3.value;
        let speed = input4.value;
        let canvas1 = document.createElement("div"); canvas1.classList.add("canvas1");
        let canvas2 = document.createElement("div"); canvas2.classList.add("canvas2"); canvas2.classList.add("inv");

        let divwidth = 25;
        let margin_right= 45;


        if(amount < 20){
            divwidth = 25;
            margin_right= 45;
        }
        else if(amount >= 20 && amount <=30){
            divwidth = 20;
            margin_right= 30;
        }
        else if(amount >= 30 && amount <=40){
            divwidth = 15;
            margin_right= 20;
        }
        else{
            divwidth = 10;
            margin_right= 10;
        }
        
        for(let x=0; x<amount; x++){
            let sameheightnum = Math.ceil(getRandom(min,max));
            let sameheight = String(sameheightnum)+"px";
            narray[x] = sameheightnum;

            array1[x] = document.createElement("div");
            array1[x].style.height = sameheight;
            array1[x].appendChild(document.createElement("span"));
            array1[x].firstChild.textContent=sameheightnum;
            array1[x].style.width = String (divwidth) +"px";
            array1[x].style.marginRight = String (margin_right)+"px";
            canvas1.appendChild(array1[x]);

            array2[x] = document.createElement("div");
            array2[x].style.height = sameheight;
            array2[x].appendChild(document.createElement("span"));
            array2[x].firstChild.textContent=sameheightnum;
            array2[x].style.width = String (divwidth) +"px";
            array2[x].style.marginRight = String (margin_right)+"px";
            canvas2.appendChild(array2[x]);


        }

        let sortbtn = document.createElement("button");
        sortbtn.type="button"; sortbtn.textContent="Sort"; sortbtn.classList.add("sort"); sortbtn.classList.add("btn");  sortbtn.classList.add("btn-dark"); 
        sortbtn.addEventListener("click",()=>{
            canvas2.classList.remove("inv");
            sortIt(narray,array2,amount,speed);
            
        });

        document.body.appendChild(canvas1);
        document.body.appendChild(sortbtn);
        document.body.appendChild(canvas2);
    
    }
    
    

    createbtn.classList.remove("working");
    document.querySelector("form").classList.add("inv");
    document.querySelector("form").style.position = "absolute";

}

