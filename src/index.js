import _ from 'lodash';
import out from './hehe';
import printMe from './print';
//import './css/style.css';
import './scss/style1.scss';
import './scss/style2.scss';


function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    let a = out();

    element.innerHTML = _.join(['Hello', a], ' ');
    element.classList.add('hello');


    return element;
}
printMe();
document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}