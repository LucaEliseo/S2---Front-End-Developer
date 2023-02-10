function ottieniHistory(){  //Funzione per il valore 
    return document.getElementById("history-valore").innerText;
}
function stampaHistory(num){    //Funzione per la stampa
    document.getElementById("history-valore").innerText=num;
}
function ottieniOutput(){ //Funzione per l'ottenimento dell'output
    return document.getElementById("valoreoutput").innerText;
}
function stampaOutput(num){
    if(num==""){
    document.getElementById("valoreoutput").innerText=num;
    }
    else{
        document.getElementById("valoreoutput").innerText=formattazionenumeri(num);
    }
}
function formattazionenumeri(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value= n.toLocaleString("en");
    return value;
}
function formattazionenumeriinversa(num){
    return Number(num.replace(/,/g, ''));
}
var operazione = document.getElementsByClassName("operatore");
for( var i=0;i<operazione.length;i++){      //Ciclo for per il click e la stampa
    operazione[i].addEventListener('click',function(){
            if(this.id=="reset"){
                stampaHistory("");
                stampaOutput("");
           }
            else{
                var output = ottieniOutput();
                var history = ottieniHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.number(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output= output==""?
                    output:formattazionenumeriinversa(output);
                    history=history+output;
                    if(this.id=="="){
                        var result= eval(history);
                        stampaOutput(result);
                        stampaHistory("");
                    }
                    else{
                        history=history+this.id;
                        stampaHistory(history);
                        stampaOutput("");
                    }
                }
            }
    });
}
var number = document.getElementsByClassName("numero");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=formattazionenumeriinversa(ottieniOutput());
        if(output!=NaN){
            output=output+this.id;
            stampaOutput(output);
        }
    });
}