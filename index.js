
function berechnen(){
    let name=document.getElementById("name").value;
    name=name.toLowerCase()
    let result="";

    if(name=="jonas"){

        result="Unglaublich hässlich"
    }else{

        	result="Sehr schön"
    }

    document.getElementById("output").innerHTML=result;    
    console.log(name)

}