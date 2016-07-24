var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Automatic Correct", "Labored Correct", "Labored Wrong", "Automatic Wrong", "Didn't Try"],
        datasets: [{
            label: 'Responses at a Glance',
            data: [5, 3, 2, 3, 2],
            backgroundColor: [
                '#4CAF50',
                'rgb(225,153,0)',
                'rgb(225,153,0)',
                '#f44336',
                '#f44336'
            ],
            borderColor: [
               '#4CAF50',
                'rgb(225,153,0)',
                'rgb(225,153,0)',
                '#f44336',
                '#f44336'
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
