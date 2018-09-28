window.addEventListener("load",initialization,false);

function initialization(){
	var sg=getNumber();
	var sm=getSign();
	// var equalExp=document.getElementById("equalsButton");
	// equalExp.addEventListener("click",solveExpression);
	getId("equalsButton").addEventListener("click",solveExpression);
	getId("clearButton").addEventListener("click",clearAllFields);
	getId("clearSymbolButton").addEventListener("click",clearConcreteSymbol);
	//написати функцїї через масиви і викликати в онлоад одну функцію. якщо нажата кнопка визиваэться getNumber(), якщо натисний знак викликається getSign()
    // if (input.value=="integer"-getNumber()) - оптимізація
 }

 var espression={
  number:"",
  number2:"",       // число 
  sign:"",    //+-*/
  equal:"",
 }

 function getSign(){
  var signPattern=/[\-\+\*\/]/;
  var signArray=document.getElementsByTagName("input");
  for(var i=0; i<signArray.length;i++){
 		signArray[i].addEventListener("click",function(e){	
 			if(signPattern.test(e.target.value)&&(espression.number!=""))
 			{
 		   		espression.sign=e.target.value;
 		   		lastOut();
 			}
      	    else{
 		     return;
 		    }
 	  })		
 	}	
 }
 
function getNumber(){
var numberPattern=/[0-9.]/;
 var numberArray=document.getElementsByTagName("input")
 	for(var i=0; i<numberArray.length;i++){
 		numberArray[i].addEventListener("click",function(e){	
 			if(numberPattern.test(e.target.value)&&(espression.sign==""))
 			{    
 		   		espression.number+=e.target.value;
 		   		if(espression.number==".") espression.number="0.";
 		   		lastOut();
 		    }
            if(numberPattern.test(e.target.value)&&(espression.number!="")&&(espression.sign!=""))
 			{
 		   		espression.number2+=e.target.value;
 		   		if(espression.number2==".") espression.number2="0.";
 		   		lastOut();	
 		    } 		    
 		else{
 		    return;
 		}
 	  })
 	}
 }
 function lastOut(){
  this.sign=espression.sign;
  this.number=espression.number;
  this.number2=espression.number2;
  var s= this.number+this.sign+this.number2;
  var calculatorInput=document.getElementById("calculator_input");
  calculatorInput.innerHTML=s;

 }
function solveExpression(){
	if(espression.number=="."){
		espression.number=0.;
	}
	if(espression.number2=="."){
		espression.number2=0.;
	}
	if((espression.sign=="-")&&(espression.number)&&(espression.number2)){
		espression.equal=parseFloat(espression.number-espression.number2);
		var calculatorOutput=document.getElementById("calculator_output");
        calculatorOutput.innerHTML="= "+espression.equal;
		return console.log(espression.equal.toFixed(2));
	}
	if((espression.sign=="+")&&(espression.number)&&(espression.number2)){
		espression.equal=parseFloat(espression.number)+parseFloat(espression.number2);
		var calculatorOutput=document.getElementById("calculator_output");
        calculatorOutput.innerHTML="= "+espression.equal;
		return espression.equal;
	}
	if((espression.sign=="*")&&(espression.number)&&(espression.number2)){
		espression.equal=parseFloat(espression.number*espression.number2);
		var calculatorOutput=document.getElementById("calculator_output");
        calculatorOutput.innerHTML="= "+espression.equal;
		return espression.equal;
	}
	if((espression.sign=="/")&&(espression.number)&&(espression.number2)){
		espression.equal=parseFloat(espression.number/espression.number2).toFixed(10);
		var calculatorOutput=document.getElementById("calculator_output");
        calculatorOutput.innerHTML="= "+espression.equal;
		return espression.equal;
	}
}

function clearAllFields(){
	getId("calculator_output").innerHTML="";
	getId("calculator_input").innerHTML="";
	espression.number="";
	espression.number2="";
	espression.sign="";
	return espression.number;
}

function clearConcreteSymbol(){ 
   var calculatorOutput=document.getElementById("calculator_output");
  if(calculatorOutput.innerHTML!="" ){
    calculatorOutput.innerHTML="";
  }
  else if(espression.number2){
  	espression.number2="";
  }
  else if((espression.number2=="")&&(espression.sign)){
  	espression.sign="";
  }
  else if((espression.number2=="")&&(espression.sign=="")&&(espression.number))
  {
  	espression.number="";
  }
	lastOut();
}

function getId(id){
	return document.getElementById(id);
}

