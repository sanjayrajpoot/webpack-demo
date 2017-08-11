import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
function component(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML = _.join(["hello","world"],'');
	element.classList.add('hello');

 //Add the image to our existing div.
  	// var myIcon = new Image();
 	 // myIcon.src = Icon;
 	 // element.appendChild(myIcon);

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   element.appendChild(btn);


	return element;
}
document.body.appendChild(component());