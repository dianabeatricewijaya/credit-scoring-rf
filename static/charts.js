$(document).ready(function(){
    // function to render chosen charts
    function renderChart(layak, taklayak, labels, chartid, charttype) {
        var ctx = document.getElementById(chartid).getContext('2d');
        var myChart = new Chart(ctx, {
            type: charttype,
            responsive: true,
            data: {
                labels: labels,
                datasets: [{
                    label: 'Layak',
                    data: layak,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    pointBorderColor: 'white',
                    pointHoverBackgroundColor: 'white',
                },
                {
                    label: 'Tidak Layak',
                    data: taklayak,
                    borderColor: 'white',
                    backgroundColor: 'orange',
                    pointBorderColor: 'orange',
                    pointHoverBackgroundColor: 'white',
                }]
            },
            options: {
                legend: {
                    labels: {
                            fontColor: 'orange'
                        }
                        },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontColor: 'orange'
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: 'orange'
                        },
                    }]
                }, 
                maintainAspectRatio: false,
                responsive: true,
            }
        });
    }

    // render gender analysis
    let horizontalBar = 'horizontalBar'
    let gender_chart = "gender"
    let gender_layak = [4378, 6080];
    let gender_taklayak = [1473, 1069];
    let gender_labels =  ["Male", "Female"];
    renderChart(gender_layak, gender_taklayak, gender_labels, gender_chart, horizontalBar);

    // render Pendidikan class analysis
    let pclass_chart = "pendidikan"
    let pclass_layak = [14, 208, 4495, 1905, 3836];
    let pclass_taklayak = [0, 85, 1359, 469, 629];
    let pclass_labels =  ["Primary School", "Middle School", "High School", "Diploma", "Bachelors/Masters/Doctors"];
    renderChart(pclass_layak, pclass_taklayak, pclass_labels, pclass_chart, horizontalBar);

    // render age analysis
    let age_chart = "age"
    let age_layak = [1959, 5190, 2729, 580];
    let age_taklayak = [578, 1319, 560, 85];
    let age_labels =  ["17 - 25 tahun", "26 - 35 tahun", "36 - 45 tahun", "46 - 55 tahun"];
    renderChart(age_layak, age_taklayak, age_labels, age_chart, 'bar');

    // render status pernikahan analysis
    let maritalstatus_chart = "maritalstatus"
    let maritalstatus_layak = [426, 6700, 3320, 10, 2];
    let maritalstatus_taklayak = [99, 1568, 873, 2, 0];
    let maritalstatus_labels =  ["Divorced", "Married", "Single", "Widow", "In a Relationship"];
    renderChart(maritalstatus_layak, maritalstatus_taklayak, maritalstatus_labels, maritalstatus_chart, 'bar');

    $("#nextOne").click(function() {
        $('#one').css("display", "none");	
        $('#two').css("display", "block");	
    });

    $("#nextTwo").click(function() {
        $('#two').css("display", "none");	
        $('#three').css("display", "block");	
    });

    $("#nextThree").click(function() {
        $('#three').css("display", "none");	
        $('#four').css("display", "block");	
    });

    $("#nextFour").click(function() {
        $('#four').css("display", "none");	
        $('#five').css("display", "block");	
    });

    $("#nextFive").click(function() {
        $('#five').css("display", "none");	
        $('#six').css("display", "block");	
    });

    // redirect to beginning
	$("#finalSubmit").click(function() {
		document.location.href = "/";
	});


});