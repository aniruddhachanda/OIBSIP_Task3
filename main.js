const celcius=document.querySelector("#celcius"),
farenheight=document.querySelector("#farenheight");

window.addEventListener("load",()=>celcius.focus());
celcius.addEventListener("input",()=>{
    farenheight.value=((celcius.value * 9)/5+32).toFixed(2);

    if(!celcius.value){
        farenheight.value="";
    }
});

farenheight.addEventListener("input",()=>{
    celcius.value=(((farenheight.value - 32) * 5)/9).toFixed(2);

    if(!farenheight.value){
        celcius.value="";
    }
});
