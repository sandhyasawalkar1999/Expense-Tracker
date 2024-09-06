let btn = document.getElementById("button");
let text = document.getElementById("text_area");
let notes_container = document.getElementById("notes_container");
let color = document.getElementById("color");
let message = document.getElementById("message");
let rightContainer = document.getElementById("right_container");

function addNotes(){
    if(text.value === ""){
        alert("Please enter some text in note");
        return;
    }
    message.innerText = "";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    // console.log(div, p, cross_btn);
    // div.appendChild(rightContainer)
    div.appendChild(p);
    div.appendChild(cross_btn);


    cross_btn.innerText = "X";
    p.innerText = text.value;


    div.style.backgroundColor = color.value;
    if(color.value == "black")
        {
            div.style.color = "white";
        }
    // div.style.margin ="30px";
    div.style.width = "20vw";
    div.style.height = "20vh";
    div.style.display ="blockInline"
    div.style.margin = "10px"
    cross_btn.style.marginLeft ="280px"
    
        div.style.display= "flex";
    // div.style.flexDirection = "column";
    // div.style.alignItems ="start";
    // cross_btn.style.alignItems ="right"
   

    notes_container.appendChild(div);
     console.log(div);

     text.value = "";

     cross_btn.addEventListener("click", function(){
        div.style.display = "none";
     })

}

btn.addEventListener("click", addNotes);