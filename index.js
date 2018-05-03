$(document).ready(function() {

    var ctx = $("#myChart");    
    /*
    var bar = new Chart(ctx, {
        type: 'bar', //'horizontalBar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green"],
            datasets: [{
                label: '# of Votes',
                data: [7, 5, 4, 9],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        //options:{}
        options: {
            //events: ['click']
            scales: {
                yAxes: [{ //xAxes
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    */
    /*
    var line = new Chart(ctx,
                      {"type":"line",
                       "data":{
                           "labels":["January","February","March","April","May","June","July"],
                           "datasets":[{
                               "label":"My First Dataset",
                               "data":[65,59,55,76,56,55,40]//,
                               //"fill":false,
                               //"borderColor":"rgb(255, 0, 0)",
                               //"backgroundColor":"rgba(255, 0, 0, 0.2)"
                               }/*,
                              {
                                "label":"My Second Dataset",
                                "data":[59,80,81,56,60,38,34],
                                "fill":false,
                                "borderColor":"rgb(0, 255, 0)",
                                "backgroundColor":"rgba(0, 255, 0, 0.2)",
                                "lineTension":0
                               },
                                {
                                "label":"My Third Dataset",
                                "data":[58,60,59,78,83,51,55],
                                "fill":false,
                                "borderColor":"rgb(0, 0, 255)",
                                "backgroundColor":"rgba(0, 0, 255, 0.2)",
                                "lineTension":0.1
                               }*//*
                            ]}
                          }
                      );  
    
    */

    var radar = new Chart(ctx,
                         {"type":"pie",
                          "data":{
                              "labels":["Alpha","Delta","Zeta","Studying","Coding"],
                              "datasets":[
                                  {"label":"Consumo attuale",
                                   "data":[85,93,50,73,81],
                                   "fill":true,
                                   "backgroundColor": [
                                       "red",
                                       "blue",
                                       "green",
                                       "pink",
                                       "orange",
                                       "yellow"
                                    ],
                                   "borderColor":"red"//"rgb(255, 99, 132)",
                                  }
                            ]}
                        
                         });

                         
                    


});