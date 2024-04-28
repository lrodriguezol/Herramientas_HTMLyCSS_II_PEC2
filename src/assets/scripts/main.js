/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

import * as bootstrap from 'bootstrap';

import Chart from 'chart.js/auto';


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('¡Enhorabuena, te has inscrito correctamente!', 'success')
  })
}

document.addEventListener('DOMContentLoaded', function() {
 
  var ctx = document.getElementById('participantesChart').getContext('2d');

  var participantesData = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [{
      label: 'Participantes por género',
      data: [2, 4],
      backgroundColor: [
        'rgba(128, 128, 128, 0.2)', //Gris hombres
        'rgba(153, 102, 255, 0.2)'  //Morado mujeres
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)', //Negro para los bordes
        'rgba(0, 0, 0, 1)' //Negro para los bordes
      ],
      borderWidth: 1
    }]
  };

  //Configuración del gráfico
  var participantesChart = new Chart(ctx, {
    type: 'bar',
    data: participantesData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});