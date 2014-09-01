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
  document.getElementById('block2').style.display='none';/*Show only fist block*/
  document.getElementById('block3').style.display='none';
  document.getElementById('block4').style.display='none';
  document.getElementById('block5').style.display='none';
  document.getElementById('block6').style.display='none';
  document.getElementById('block7').style.display='none';
  document.getElementById('form').style.display='block';/*activate the form*/
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
  var item='<spam class="'+pleasureOfFunctionality1.value+frequencyOfFunctionality1.value+'">'+degreeOfFunctionality1.value+'</spam>';
  if (degreeOfFunctionality2.value!="") {
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
  item='<div item="yes">'+item+'</spam></div>';
  probando='#'+professionalEffectOfFunctionality1.value+"a"+StimulusLevelOfFunctionality1.value+'';
  $(probando).append(item);
  document.getElementById('form').style.display='none';
}