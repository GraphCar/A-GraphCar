setTimeout(()=>{
    const ctx = document.getElementById('lineChart');

    let delayed;
    var dataset = [0, 80, 0, 50, 0, 30, 0]

    var data = {
        labels: dataset,
        datasets: [{
            label: '',
            data: dataset,
            fill: false,
            borderColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            tension: 0.1,
            pointRadius: 10,
            pointHoverRadius: 10
        }]
    }

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 200 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            x: {
                stacked: true,
                display: false,
            },
            y: {
                display: false,
                stacked: true,
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
        }
    }
    

    var line = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    setTimeout(()=>{
        document.body.removeChild(document.querySelector('.loader'))
    }, 5250)

}, 2000)