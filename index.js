
function berechnen(){
        function checkName(nameF,messageF){
            console.log(nameF+" "+messageF)
        let name=document.getElementById("name").value;
        name=name.toLowerCase()
        let result="";

        if(name==nameF){

            result=messageF;
        }else{

                result="Sehr schön"
        }

        document.getElementById("output").innerHTML=result; 
        }
    
    let hash=window.location.hash;
    if(hash) {
        let realName="";
        let realText="";
        hash=hash.replace("#","")
        const splitted=hash.split("**")
        const name=splitted[0];
        const message=splitted[1]
        const nameB=name.split("*")
        let messageB=message.split("*")
        messageB.pop();
        var notRealName = nameB.map(function (x) { 
            return parseInt(x, 10); 
          });
          for(x in notRealName){
        realName+=String.fromCharCode(notRealName[x])
          }
          var notRealText = messageB.map(function (x) { 
            return parseInt(x, 10); 
          });
          for(x in notRealText){
        realText+=String.fromCharCode(notRealText[x])
          }
        console.log(realName+"/"+realText)
        
        checkName(realName,realText)
      } else {
        checkName("jonas","Unglaublich hässlich")
      }
}