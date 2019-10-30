//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Materials = require('Materials');
const Patches = require('Patches');
const Scene = require('Scene');
const Reactive = require('Reactive');
const Diagnostics = require('Diagnostics');
var TouchGestures = require('TouchGestures');
var Canvas = require('Canvas');

//from script sayi = 1;
//const myNumber = Patches.getNumberValue('myNumber');
// How to access scene objects (uncomment line below to activate)
 
  //const text = Scene.root.find('2dText0');

var done = false;

// Locate the text in the Scene
var exitManualBtn = Scene.root.find('exitManual');

var text = Scene.root.find('2dText0');
var sayacText = Scene.root.find('timeText');
var particle = Scene.root.find("emitter0");
var fireworkParticle = Scene.root.find("deneme");
var manualRect = Scene.root.find("rectangle0");
var manualBtn = Scene.root.find("rectangle1");
var canvas = Scene.root.find("canvas0");
var Time = require('Time');

const timeInMilliseconds = 500;
manualRect.hidden = true;
manualBtn.hidden = false;
canvas.hidden = true;
//canvas.hidden=true;
//canvas.height = 0;
//canvas.forCaptureOutput(false);
//canvas.forPreviewOutput(false);
particle.scale = 0;
fireworkParticle.scale = 0;
// Create a boolean variable
var myBoolean = true;
var passBool = false;
var showBtn = Scene.root.find('Button10');
var brokenGlass = Scene.root.find('brokenglass');
var okBtn = Scene.root.find('Button10');
var birBtn = Scene.root.find('Button1');
var ikiBtn = Scene.root.find('Button2');
var ucBtn = Scene.root.find('Button3');
var dortBtn = Scene.root.find('Button4');
var besBtn = Scene.root.find('Button5');
var altiBtn = Scene.root.find('Button6');
var yediBtn = Scene.root.find('Button7');
var sekizBtn = Scene.root.find('Button8');
var dokuzBtn = Scene.root.find('Button9');
var sifirBtn = Scene.root.find('Button12');
var deleteBtn = Scene.root.find('Button11');
//var numberPlease = 2;
brokenGlass.hidden = true;


var circledArrow = Scene.root.find('circledArrow');
var hint = Scene.root.find('Hint');
var hintText2 = Scene.root.find('hintText2');
// Send the boolean value to the Patch Editor under the name 'myBoolean'

Patches.setBooleanValue('myBoolean', myBoolean);

// Get the 'myString' string value from the Patch Editor
//const myString = Patches.getStringValue('myString');
//const ikinciString = Patches.getStringValue('ikinciString');
//const ucuncuString = Patches.getStringValue('ucuncuString');
//const dorduncuString = Patches.getStringValue('dorduncuString');
/*const besinciString = Patches.getStringValue('besinciString');
const altinciString = Patches.getStringValue('altinciString');
const yedinciString = Patches.getStringValue('yedinciString');
const sekizinciString = Patches.getStringValue('sekizinciString');
const dokuzuncuString = Patches.getStringValue('dokuzuncuString');*/


/*

var son = myString.concat(ikinciString);
var deneme = ucuncuString.concat(dorduncuString);
var xd = son.concat(deneme);
text.text= xd;



//========TAMAMEN KODLA YAPMAK İÇİN YORUM SATIRI=========


var sayi1 = parseInt(xd.pinLastValue());
var sayi2 = 1234;

if(sayi1==sayi2){
  passBool = true;
  Patches.setBooleanValue('passBool', passBool);
}else{
  passBool =false;
  Patches.setBooleanValue('passBool', passBool);
}
  */

//Diagnostics.log(text.text.pinLastValue());
function allOfIt(){
  
}
//===========================DAYS========================

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date();
var dayName = days[d.getDay()];
var daynum = d.getDay();
if(d.getDay()==0){
  daynum = 7;
}

//============================MANUAL TEXT CONF =========================



var passText = 0;

var sonDigit=4;


var rocketEgzoz = Scene.root.find('Roketegzoz');
var rocketKanat = Scene.root.find('Roketkanat');
var rocketGovde = Scene.root.find("Cylinder");
var signplaneright = Scene.root.find('signplaneright');
var signplaneleft = Scene.root.find('signplaneleft');
var signplaneback = Scene.root.find('signplaneback');
var signplanefourth = Scene.root.find('signplanefourth');

var materialRed = Materials.get('Material.001');
var materialBlack = Materials.get('Material.002');
var materialGray = Materials.get('DefaultMaterial0');

var materialBlue = Materials.get('metal');
var materialGreen = Materials.get('green');

var materialHash = Materials.get('hashsign');
var materialBeta = Materials.get('betasign');
var materialPound = Materials.get('poundsign');
//  ŞU ANDA KULLANILMIYOR MANUAL'E PAGE2 EKLENİRSE KULLANILACAK -------
//======CONF ENDED ===================================================dw
//========= MANUAL TEXT SWITCHING=====================================



//========================== MANUAL TEXT SWITCHING ENDED===================

//=====SAYAC

var sayacTime = 119;
function sayac(){
  if(done){
  if(sayacTime>0){
    sayacTime = sayacTime-1;
    sayacText.text = sayacTime.toString();
  }else if(sayacTime <=0 )
  {
    
    brokenGlass.hidden = false;
  }
}
}

  var timeoutTimer = Time.setInterval(sayac, timeInMilliseconds*2);
//=======SAYAC



  //==============PASSWORD CONF ========================= DEPRECATED XD ========= ONLY USING FOR MATERIAL SWITCHIN ============
  var passwordsWithoutLast = [853,857,854,263,264,261,404,407,404];
  var planeArray = [signplaneright, signplaneleft,signplaneback,signplanefourth];
  var arrP = Math.floor(Math.random()*9);
  var ilkiki = passwordsWithoutLast[arrP].toString().substring(0,2);
  var ucuncu = passwordsWithoutLast[arrP].toString().substring(2,3);
  if(ilkiki == "85"){
    rocketGovde.material = materialRed;
    rocketEgzoz.material = materialGray;
    rocketKanat.material = materialBlack;
    planeArray[0].material = materialBlack;
    planeArray[1].material = materialBlack;
    planeArray[2].material = materialGray;
    planeArray[3].material = materialRed;
  }else if(ilkiki =="26"){
    rocketGovde.material = materialBlack;
    rocketEgzoz.material = materialRed;
    rocketKanat.material = materialGray;
    
    planeArray[0].material = materialGray;
    planeArray[1].material = materialGray;
    planeArray[2].material = materialRed;
    planeArray[3].material = materialBlack;

  }else if(ilkiki =="40"){
    rocketGovde.material = materialGray;
    rocketEgzoz.material = materialBlack;
    rocketKanat.material = materialRed;
    
    planeArray[0].material = materialRed;
    planeArray[1].material = materialRed;
    planeArray[2].material = materialBlack;
    planeArray[3].material = materialGray;
  }
  
 
  //====SEMBOL MEVZUSU EKLENECEK...
  var rndm = Math.floor(Math.random() * 4);
  var matArray = [materialHash,materialBeta,materialPound];
  
  if(ucuncu == "3"){
    //planeArray[rndm].material = matArray[2];
    planeArray[rndm].material = matArray[0];

  }else if(ucuncu =="7"){
    planeArray[rndm].material = matArray[0];
  }else if(ucuncu=="1"){
    //planeArray[rndm].material = matArray[1];
    planeArray[rndm].material = matArray[0];
  }else if(ucuncu =="4"){
    //planeArray[rndm].material = matArray[2];
    planeArray[rndm].material = matArray[0];
  }
  planeArray[0].material = matArray[1]; // beta
  planeArray[3].material = matArray[0]; //hash
  planeArray[2].material = matArray[2];//pound
  planeArray[1].material = matArray[0];//hash
  //hash=3,beta=3, pound = -5
  //I DESTROYED THAT BEAUTY CUZ OF THE TIME ISSUES(NEED TO SUBMIT).

  //====================PASSWORD CONF ENDED...===================
switchPass();
const passSwitcher = Time.setInterval(switchPass, timeInMilliseconds*2);

function switchPass(){
  var lastNum = sayacTime.toString().substring(0,1);
  var newPass = passwordsWithoutLast[arrP].toString().concat(lastNum);
  
  password = parseInt(newPass);
  
}


//====NEW MANUAL UP 
var manualStep1 = Scene.root.find('step1');
var manualStep2 = Scene.root.find('step2');
var manualStep3 = Scene.root.find('step3');
var manualStep4 = Scene.root.find('step4');
var crossMat = Materials.get('crossMat');
var checkMat = Materials.get('checkMat');
var manualText = Scene.root.find('manualTextDynamic');



var ilkikiDigit= parseInt("4".concat(daynum.toString()));
var ilkucDigit = parseInt(ilkikiDigit.toString().concat("2"));
var sayacHintControl=0;
var passwordSon = parseInt(ilkucDigit.toString().concat(sonDigit.toString()));
function passControl(){

if(passText == 4){
  manualStep1.material = checkMat;
  manualText.text = "What day of the week is today? ( Considering Monday is the first day)";
  sayacHintControl++;
}
 if(passText ==ilkikiDigit ){
  manualStep2.material = checkMat;
  manualText.text = "Question marks in games are always helpful to you.";
  sayacHintControl++;
}
 if(passText == ilkucDigit ){
  manualStep3.material = checkMat;
  manualText.text ="Keypad.";
  sayacHintControl++;
}
if(passText == passwordSon){
  manualStep4.material = checkMat;
  okBtn.material = materialGray;
  sayacHintControl++;
}

  
}
var hintqm = Materials.get('hintQM');
var qmMaterial = Materials.get('material1');
var hintArrowLast = Scene.root.find('hintArrowLast');
//=====
//======================================================
var password;
var hintOnOff = false;
circledArrow.hidden = true;
hintText2.hidden = true;
hintArrowLast.hidden = true;

TouchGestures.onTap(hint).subscribe(function() {
  if(sayacHintControl==0){
    circledArrow.hidden=false;
    if(hintOnOff){
      circledArrow.hidden =true;
      hintOnOff=false;
    }
    hintOnOff = true; 
    }
    if(sayacHintControl==2){
      
      hintText2.hidden=false;
      manualBtn.material = hintqm;
      if(hintOnOff){
        hintOnOff=false;
        manualBtn.material = qmMaterial;
      }
      hintOnOff = true; 
      }
      if(sayacHintControl==3){
      
        hintArrowLast.hidden=false;
        
        if(hintOnOff){
          hintOnOff=false;
          hintArrowLast.hidden=true;
        }
        hintOnOff = true; 
        }

});
function particleOn(){
  fireworkParticle.scale= 1;
  
}
TouchGestures.onTap(okBtn).subscribe(function() {
  particle.scale = 0.05;
    if(passText == passwordSon){
      passBool = true;
      Patches.setBooleanValue('passBool', passBool);
      particle.scale = 0.05;
      const aaa = Time.setInterval(particleOn, timeInMilliseconds*14);
    }
    
      

});

TouchGestures.onTap(exitManualBtn).subscribe(function() {
  manualRect.hidden = true;
  manualBtn.hidden = false;
  
  
});


TouchGestures.onTap(manualBtn).subscribe(function() {
  
  manualRect.hidden = false;
  manualBtn.hidden = true;

});
//=========BUTTON CONF =============
//======================================================
TouchGestures.onTap(birBtn).subscribe(function() {
  if(passText ==0)
    passText++;
    else{
      passText = parseInt(passText.toString().concat("1"));
    }
    
    text.text= passText.toString();
    passControl();
});
//======================================================
TouchGestures.onTap(ikiBtn).subscribe(function() {
  if(passText == 0){
    passText =2;
  }else
    passText = parseInt(passText.toString().concat("2"));
  text.text= passText.toString();
  passControl();
});
//======================================================
//======================================================
TouchGestures.onTap(sifirBtn).subscribe(function() {
  if(passText == 0){
    passText =0;
  }else
    passText = parseInt(passText.toString().concat("0"));
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(ucBtn).subscribe(function() {
  if(passText == 0){
    passText =3;
  }else
    passText = parseInt(passText.toString().concat("3"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(deleteBtn).subscribe(function() {
  if(passText.toString().length != 1)
  passText = parseInt(passText.toString().slice(0,-1));
  else
    passText=0;
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(dortBtn).subscribe(function() {
  if(passText == 0){
    passText =4;
  }else
    passText = parseInt(passText.toString().concat("4"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(besBtn).subscribe(function() {
  if(passText == 0){
    passText =5;
  }else
    passText = parseInt(passText.toString().concat("5"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(altiBtn).subscribe(function() {
  if(passText == 0){
    passText =6;
  }else
    passText = parseInt(passText.toString().concat("6"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(yediBtn).subscribe(function() {
  if(passText == 0){
    passText =7;
  }else
    passText = parseInt(passText.toString().concat("7"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(sekizBtn).subscribe(function() {
  if(passText == 0){
    passText =8;
  }else
    passText = parseInt(passText.toString().concat("8"));
  
  text.text= passText.toString();
  passControl();
});
//======================================================
TouchGestures.onTap(dokuzBtn).subscribe(function() {
  if(passText == 0){
    passText =9;
  }else
    passText = parseInt(passText.toString().concat("9"));
  
  text.text= passText.toString();
  passControl();
});



var handguide = Scene.root.find('handguide');
var firstText = Scene.root.find('firstText');
var firstText0 = Scene.root.find('firstText0');
var handguideSayac = 0;
TouchGestures.onTap(handguide).subscribe(function() {
  myBoolean = false;
  /*
  if(handguideSayac==1){
    myBoolean = false;
    Patches.setBooleanValue('myBoolean', myBoolean);
    handguide.hidden = true;
  }*/
  //handguideSayac++;
  Patches.setBooleanValue('myBoolean', myBoolean);
  Diagnostics.log(handguideSayac);
  done= true;
  handguide.hidden =true;
  firstText.hidden = true;
  firstText0.hidden = true;
  canvas.hidden = false;
});
