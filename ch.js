let add=document.querySelector("#add");
let rmv=document.querySelector("#removeButton");
let inpt=document.querySelector("#myInput");
let ul=document.querySelector("#myList");
let area=document.querySelector(".editarea");


add.addEventListener("click",()=>{
    if(inpt.value!=""){
    let nwele=document.createElement("li");
    nwele.textContent=inpt.value;
    console.log(nwele.innerHTML);

    

    let del=document.createElement("button");
    del.textContent = "X";
    del.className="delete";
    del.addEventListener("click",()=>{
        ul.removeChild(nwele);
    })

    let comp=document.createElement("input");
    comp.type="checkbox";
    comp.className="chbx";

    comp.addEventListener("click",()=>{
        if(comp.checked)
            nwele.style.textDecorationLine="line-through";
        else {
            nwele.style.textDecorationLine="none";

        }
    })

    // let edit=document.createElement("button");
    // edit.textContent="edit";


    // edit.addEventListener("click",()=>{
    //     nwele.textContent=area.textContent;
    //     area.textContent="";
        
        

    // })
    


    // nwele.appendChild(edit);
    nwele.appendChild(comp);
    nwele.appendChild(del);
    ul.appendChild(nwele);
    inpt.value="";}

})

rmv.addEventListener("click",()=>{
    while(ul.firstChild){
        
        ul.removeChild(ul.firstChild);
        
    }
    inpt.value="";

})