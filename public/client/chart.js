var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontSize = 20;
Chart.defaults.global.legend.display = false;
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Phonemic Awareness", "Sounding Out", "Sight Words", "Fluency", "Spelling"],
        datasets: [{
            // label: 'Responses at a Glance',
            data: [2, 3.5, 5, 3.5, 2.9],
            backgroundColor: [
                '#00b8e6',
                '#4CAF50',
                '#0033cc',
                '#cc00cc',
                '#00cc99',
            ],
            borderColor: [
                '#00b8e6',
                '#4CAF50',
                '#0033cc',
                '#cc00cc',
                '#00cc99',
            ],
            borderWidth: 1
            }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

// backgroundColor: [
//                 '#4CAF50',
//                 'rgb(225,153,0)',
//                 'rgb(225,153,0)',
//                 '#f44336',
//                 '#f44336'
//             ],
//             borderColor: [
//                '#4CAF50',
//                 'rgb(225,153,0)',
//                 'rgb(225,153,0)',
//                 '#f44336',
//                 '#f44336'
//             ],
