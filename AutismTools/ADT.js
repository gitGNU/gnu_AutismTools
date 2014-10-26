// File: ADT.js
// Author: Jean-René Mérou
// Email:  h at es.gnu.org
// Function: strips for the autism detection tools
// Languaje: javascript
// Licence: afero >=3
// File license: afero.txt, you can find the file in the same directory of this one. If not, please contactme at h at es.gnu.org.

/* Copyright (C) 2014 Jean-René Mérou   

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.*/

var box=0;
var localbox=0;
var localboxchanging=0;
var x=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var xy=[x];//doble dimensional array with all the data for all the boxes.


function showForm(functionality) {
  document.getElementById('selectedFunctionality').value=functionality;/*leaves only the name, everything is cleaned*/
  document.getElementById('twoExtraWords').value="";
  document.getElementById('twoExtraWords').style.display='none';
  document.getElementById('degreeOfFunctionality1').value="";
  document.getElementById('degreeOfFunctionality2').value="";
  document.getElementById('degreeOfFunctionality3').value="";
  document.getElementById('degreeOfFunctionality4').value="";
  document.getElementById('degreeOfFunctionality5').value="";
  document.getElementById('degreeOfFunctionality6').value="";
  document.getElementById('degreeOfFunctionality7').value="";
  document.getElementById('pleasureOfFunctionality1').value="";
  document.getElementById('pleasureOfFunctionality2').value="";
  document.getElementById('pleasureOfFunctionality3').value="";
  document.getElementById('pleasureOfFunctionality4').value="";
  document.getElementById('pleasureOfFunctionality5').value="";
  document.getElementById('pleasureOfFunctionality6').value="";
  document.getElementById('pleasureOfFunctionality7').value="";
  document.getElementById('frequencyOfFunctionality1').value="normal";
  document.getElementById('frequencyOfFunctionality2').value="normal";
  document.getElementById('frequencyOfFunctionality3').value="normal";
  document.getElementById('frequencyOfFunctionality4').value="normal";
  document.getElementById('frequencyOfFunctionality5').value="normal";
  document.getElementById('frequencyOfFunctionality6').value="normal";
  document.getElementById('frequencyOfFunctionality7').value="normal";
//  document.getElementById('professionalEffectOfFunctionality1').value=functionality ;
  document.getElementById('StimulusLevelOfFunctionality1').value="";
  document.getElementById('block2').style.display='none';/*Show only fist block*/
  document.getElementById('block3').style.display='none';
  document.getElementById('block4').style.display='none';
  document.getElementById('block5').style.display='none';
  document.getElementById('block6').style.display='none';
  document.getElementById('block7').style.display='none';
  document.getElementById('form').style.display='block';/*activate the form*/
}



function showForm2(functionality,thislocalbox) {
  localboxchanging=thislocalbox;
  document.getElementById('selectedFunctionality_2').value=xy[thislocalbox,0]; 
  document.getElementById('twoExtraWords_2').value=xy[thislocalbox,1];
  document.getElementById('twoExtraWords_2').style.display=xy[thislocalbox,25]; 
  document.getElementById('degreeOfFunctionality1_2').value=xy[thislocalbox,2];

  document.getElementById('degreeOfFunctionality2_2').value=xy[thislocalbox,3];
  document.getElementById('degreeOfFunctionality3_2').value=xy[thislocalbox,4];
  document.getElementById('degreeOfFunctionality4_2').value=xy[thislocalbox,5];
  document.getElementById('degreeOfFunctionality5_2').value=xy[thislocalbox,6];
  document.getElementById('degreeOfFunctionality6_2').value=xy[thislocalbox,7];
  document.getElementById('degreeOfFunctionality7_2').value=xy[thislocalbox,8];
  document.getElementById('pleasureOfFunctionality1_2').value=xy[thislocalbox,9];
  document.getElementById('pleasureOfFunctionality2_2').value=xy[thislocalbox,10];
  document.getElementById('pleasureOfFunctionality3_2').value=xy[thislocalbox,11];
  document.getElementById('pleasureOfFunctionality4_2').value=xy[thislocalbox,12];
  document.getElementById('pleasureOfFunctionality5_2').value=xy[thislocalbox,13];
  document.getElementById('pleasureOfFunctionality6_2').value=xy[thislocalbox,14];
  document.getElementById('pleasureOfFunctionality7_2').value=xy[thislocalbox,15];
  document.getElementById('frequencyOfFunctionality1_2').value=xy[thislocalbox,16];
  document.getElementById('frequencyOfFunctionality2_2').value=xy[thislocalbox,17];
  document.getElementById('frequencyOfFunctionality3_2').value=xy[thislocalbox,18];
  document.getElementById('frequencyOfFunctionality4_2').value=xy[thislocalbox,19];
  document.getElementById('frequencyOfFunctionality5_2').value=xy[thislocalbox,20];
  document.getElementById('frequencyOfFunctionality6_2').value=xy[thislocalbox,21];
  document.getElementById('frequencyOfFunctionality7_2').value=xy[thislocalbox,22];
  document.getElementById('professionalEffectOfFunctionality1_2').value=xy[localbox,23] ;
  document.getElementById('StimulusLevelOfFunctionality1_2').value=xy[localbox,24];
  document.getElementById('block2_2').style.display=xy[thislocalbox,26];
  document.getElementById('block3_2').style.display=xy[thislocalbox,27];
  document.getElementById('block4_2').style.display=xy[thislocalbox,28];
  document.getElementById('block5_2').style.display=xy[thislocalbox,29];
  document.getElementById('block6_2').style.display=xy[thislocalbox,30];
  document.getElementById('block7_2').style.display=xy[thislocalbox,31];
  

  document.getElementById('form2').style.display='block';/*activate the form*/
}


function activateTwoExtraWords_2() {
  if (document.getElementById('twoExtraWords_2').style.display=='block') {
    document.getElementById('twoExtraWords_2').style.display='none';
  } else {
    document.getElementById('twoExtraWords_2').style.display='block';
  }
}
function activateblock2_2() {
  if (document.getElementById('block2_2').style.display=='block') {
    document.getElementById('block2_2').style.display='none';
  } else {
    document.getElementById('block2_2').style.display='block';
  }
}
function activateblock3_2() {
  if (document.getElementById('block3_2').style.display=='block') {
    document.getElementById('block3_2').style.display='none';
  } else {
    document.getElementById('block3_2').style.display='block';
  }
}
function activateblock4_2() {
  if (document.getElementById('block4_2').style.display=='block') {
    document.getElementById('block4_2').style.display='none';
  } else {
    document.getElementById('block4_2').style.display='block';
  }
}
function activateblock5_2() {
  if (document.getElementById('block5_2').style.display=='block') {
    document.getElementById('block5_2').style.display='none';
  } else {
    document.getElementById('block5_2').style.display='block';
  }
}
function activateblock6_2() {
  if (document.getElementById('block6_2').style.display=='block') {
    document.getElementById('block6_2').style.display='none';
  } else {
    document.getElementById('block6_2').style.display='block';
  }
}
function activateblock7_2() {
  if (document.getElementById('block7_2').style.display=='block') {
    document.getElementById('block7_2').style.display='none';
  } else {
    document.getElementById('block7_2').style.display='block';
  }
}







function activateTwoExtraWords() {
  if (document.getElementById('twoExtraWords').style.display=='block') {
    document.getElementById('twoExtraWords').style.display='none';
  } else {
    document.getElementById('twoExtraWords').style.display='block';
  }
}
function activateblock2() {
  if (document.getElementById('block2').style.display=='block') {
    document.getElementById('block2').style.display='none';
  } else {
    document.getElementById('block2').style.display='block';
  }
}
function activateblock3() {
  if (document.getElementById('block3').style.display=='block') {
    document.getElementById('block3').style.display='none';
  } else {
    document.getElementById('block3').style.display='block';
  }
}
function activateblock4() {
  if (document.getElementById('block4').style.display=='block') {
    document.getElementById('block4').style.display='none';
  } else {
    document.getElementById('block4').style.display='block';
  }
}
function activateblock5() {
  if (document.getElementById('block5').style.display=='block') {
    document.getElementById('block5').style.display='none';
  } else {
    document.getElementById('block5').style.display='block';
  }
}
function activateblock6() {
  if (document.getElementById('block6').style.display=='block') {
    document.getElementById('block6').style.display='none';
  } else {
    document.getElementById('block6').style.display='block';
  }
}
function activateblock7() {
  if (document.getElementById('block7').style.display=='block') {
    document.getElementById('block7').style.display='none';
  } else {
    document.getElementById('block7').style.display='block';
  }
}
function addFunctionality() {
  box=box+1;
  localbox=box;

  xy[localbox,0]= selectedFunctionality.value;
  xy[localbox,1]= twoExtraWords.value;
  xy[localbox,2]= degreeOfFunctionality1.value;
  xy[localbox,3]= degreeOfFunctionality2.value;
  xy[localbox,4]= degreeOfFunctionality3.value;
  xy[localbox,5]= degreeOfFunctionality4.value;
  xy[localbox,6]= degreeOfFunctionality5.value;
  xy[localbox,7]= degreeOfFunctionality6.value;
  xy[localbox,8]= degreeOfFunctionality7.value;
  xy[localbox,9]= pleasureOfFunctionality1.value;
  xy[localbox,10]= pleasureOfFunctionality2.value;
  xy[localbox,11]=pleasureOfFunctionality3.value;
  xy[localbox,12]=pleasureOfFunctionality4.value ;
  xy[localbox,13]=pleasureOfFunctionality5.value ;
  xy[localbox,14]=pleasureOfFunctionality6.value ;
  xy[localbox,15]=pleasureOfFunctionality7.value ;
  xy[localbox,16]=frequencyOfFunctionality1.value;
  xy[localbox,17]=frequencyOfFunctionality2.value;
  xy[localbox,18]=frequencyOfFunctionality3.value;
  xy[localbox,19]=frequencyOfFunctionality4.value ;
  xy[localbox,20]=frequencyOfFunctionality5.value ;
  xy[localbox,21]=frequencyOfFunctionality6.value ;
  xy[localbox,22]=frequencyOfFunctionality7.value ;
  xy[localbox,23]=professionalEffectOfFunctionality1.value ;
  xy[localbox,24]=StimulusLevelOfFunctionality1.value ;
  xy[localbox,25]=document.getElementById('twoExtraWords').style.display;
  xy[localbox,26]=document.getElementById('block2').style.display;
  xy[localbox,27]=document.getElementById('block3').style.display;
  xy[localbox,28]=document.getElementById('block4').style.display;
  xy[localbox,29]=document.getElementById('block5').style.display;
  xy[localbox,30]=document.getElementById('block6').style.display;
  xy[localbox,31]=document.getElementById('block7').style.display;
  
  
  var item='<a href="javascript:;" onclick="showForm2('+"'"+selectedFunctionality.value+"'"+','+localbox+');">&nbsp;&nbsp;'+localbox+'&nbsp;&nbsp;</a>';
  item=item+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  item=item+'<spam class="'+pleasureOfFunctionality1.value+frequencyOfFunctionality1.value+'" >'+degreeOfFunctionality1.value+'</spam>';
  if (degreeOfFunctionality2.value!="" && document.getElementById('block2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality2.value+frequencyOfFunctionality2.value+'">'+degreeOfFunctionality2.value+'</spam>';
  }
  if (degreeOfFunctionality3.value!="") {
    item=item+'<spam class="'+pleasureOfFunctionality3.value+frequencyOfFunctionality3.value+'">'+degreeOfFunctionality3.value+'</spam>';
  }
  if (degreeOfFunctionality4.value!="") {
    item=item+'<spam class="'+pleasureOfFunctionality4.value+frequencyOfFunctionality4.value+'">'+degreeOfFunctionality4.value+'</spam>';
  }
  if (degreeOfFunctionality5.value!="") {
    item=item+'<spam class="'+pleasureOfFunctionality5.value+frequencyOfFunctionality5.value+'">'+degreeOfFunctionality5.value+'</spam>';
  }
  if (degreeOfFunctionality6.value!="") {
    item=item+'<spam class="'+pleasureOfFunctionality6.value+frequencyOfFunctionality6.value+'">'+degreeOfFunctionality6.value+'</spam>';
  }
  if (degreeOfFunctionality7.value!="") {
    item=item+'<spam class="'+pleasureOfFunctionality7.value+frequencyOfFunctionality7.value+'">'+degreeOfFunctionality7.value+'</spam>';
  }
  if (selectedFunctionality.value!="") {
    item=item+"<br />"+'<spam class="'+pleasureOfFunctionality1.value+'rare">'+selectedFunctionality.value;
  }
  if (twoExtraWords.value!="") {item=item+"<br />"+twoExtraWords.value;}
  item='<div item="yes" id='+localbox+'>'+item+'</spam></div>';
  probando='#'+professionalEffectOfFunctionality1.value+"a"+StimulusLevelOfFunctionality1.value+'';
  $(probando).append(item);
  document.getElementById('form').style.display='none';
}

function changeFunctionality() {
  //box=box+1;
   
  elemento = document.getElementById(localboxchanging);
  padre = elemento.parentNode;
  padre.removeChild(elemento); 
  
  localbox=localboxchanging;

  xy[localbox,0]= selectedFunctionality_2.value;
  xy[localbox,1]= twoExtraWords_2.value;
  xy[localbox,2]= degreeOfFunctionality1_2.value;
  xy[localbox,3]= degreeOfFunctionality2_2.value;
  xy[localbox,4]= degreeOfFunctionality3_2.value;
  xy[localbox,5]= degreeOfFunctionality4_2.value;
  xy[localbox,6]= degreeOfFunctionality5_2.value;
  xy[localbox,7]= degreeOfFunctionality6_2.value;
  xy[localbox,8]= degreeOfFunctionality7_2.value;
  xy[localbox,9]= pleasureOfFunctionality1_2.value;
  xy[localbox,10]= pleasureOfFunctionality2_2.value;
  xy[localbox,11]=pleasureOfFunctionality3_2.value;
  xy[localbox,12]=pleasureOfFunctionality4_2.value ;
  xy[localbox,13]=pleasureOfFunctionality5_2.value ;
  xy[localbox,14]=pleasureOfFunctionality6_2.value ;
  xy[localbox,15]=pleasureOfFunctionality7_2.value ;
  xy[localbox,16]=frequencyOfFunctionality1_2.value;
  xy[localbox,17]=frequencyOfFunctionality2_2.value;
  xy[localbox,18]=frequencyOfFunctionality3_2.value;
  xy[localbox,19]=frequencyOfFunctionality4_2.value ;
  xy[localbox,20]=frequencyOfFunctionality5_2.value ;
  xy[localbox,21]=frequencyOfFunctionality6_2.value ;
  xy[localbox,22]=frequencyOfFunctionality7_2.value ;
  xy[localbox,23]=professionalEffectOfFunctionality1_2.value ;
  xy[localbox,24]=StimulusLevelOfFunctionality1_2.value ;
  xy[localbox,25]=document.getElementById('twoExtraWords_2').style.display;
  xy[localbox,26]=document.getElementById('block2_2').style.display;
  xy[localbox,27]=document.getElementById('block3_2').style.display;
  xy[localbox,28]=document.getElementById('block4_2').style.display;
  xy[localbox,29]=document.getElementById('block5_2').style.display;
  xy[localbox,30]=document.getElementById('block6_2').style.display;
  xy[localbox,31]=document.getElementById('block7_2').style.display;


 
  var item='<a href="javascript:;" onclick="showForm2('+"'"+selectedFunctionality_2.value+"'"+','+localbox+');">&nbsp;&nbsp;'+localbox+'&nbsp;&nbsp;</a>';
  item=item+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
  item=item+'<spam class="'+pleasureOfFunctionality1_2.value+frequencyOfFunctionality1_2.value+'" >'+degreeOfFunctionality1_2.value+'</spam>';
  if (degreeOfFunctionality2_2.value!="" && document.getElementById('block2_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality2_2.value+frequencyOfFunctionality2_2.value+'">'+degreeOfFunctionality2_2.value+'</spam>';
  }
  if (degreeOfFunctionality3_2.value!="" && document.getElementById('block3_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality3_2.value+frequencyOfFunctionality3_2.value+'">'+degreeOfFunctionality3_2.value+'</spam>';
  }
  if (degreeOfFunctionality4_2.value!="" && document.getElementById('block4_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality4_2.value+frequencyOfFunctionality4_2.value+'">'+degreeOfFunctionality4_2.value+'</spam>';
  }
  if (degreeOfFunctionality5_2.value!="" && document.getElementById('block5_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality5_2.value+frequencyOfFunctionality5_2.value+'">'+degreeOfFunctionality5_2.value+'</spam>';
  }
  if (degreeOfFunctionality6_2.value!="" && document.getElementById('block6_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality6_2.value+frequencyOfFunctionality6_2.value+'">'+degreeOfFunctionality6_2.value+'</spam>';
  }
  if (degreeOfFunctionality7_2.value!="" && document.getElementById('block7_2').style.display =='block') {
    item=item+'<spam class="'+pleasureOfFunctionality7_2.value+frequencyOfFunctionality7_2.value+'">'+degreeOfFunctionality7_2.value+'</spam>';
  }
  if (selectedFunctionality_2.value!="") {
    item=item+"<br />"+'<spam class="'+pleasureOfFunctionality1_2.value+'rare">'+selectedFunctionality_2.value;
  }
  if (twoExtraWords_2.value!=""  && document.getElementById('twoExtraWords_2').style.display =='block') {item=item+"<br />"+twoExtraWords_2.value;}
  item='<div item="yes" id='+localbox+'>'+item+'</spam></div>';
  probando='#'+professionalEffectOfFunctionality1_2.value+"a"+StimulusLevelOfFunctionality1_2.value+'';
  $(probando).append(item);
  
 
  
  document.getElementById('form2').style.display='none';
}



