
function berechnen(){
    let name=document.getElementById("name").value;
    name=name.toLowerCase()
    let text=document.getElementById("text").value;
    text=text.toLowerCase()
    let result="";
    for(let i=0; i<name.length;i++ ){
        result+=name[i].charCodeAt(0)+"*"
    }
    result+="*"
    for(let i=0; i<text.length;i++ ){   
        result+=text[i].charCodeAt(0)+"*"
    }
    console.log(result)

    document.getElementById("output").innerHTML="https://mittelscheitelbewertung.github.io/index.html#"+result;    
    document.getElementById("output").href="https://mittelscheitelbewertung.github.io/index.html#"+result; 

}