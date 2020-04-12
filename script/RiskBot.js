/***************************** */
/*      Titan Hacks 2020      */
/**************************** */

var botui = new BotUI('my-botui-app');

var country = localStorage.getItem("country");

var count = 0;

function counter(val) {
    count += val;
}

botui.message.add({
    delay: 500,
    loading: true,
    content: 'Hey, Lets check if you have any risk of getting infected to the Corona Virus.'
});
botui.message.add({
    delay: 700,
    loading: true,
    content: 'What is your age?'
});
botui.action.text({
    action: {
        sub_type: 'number',
        placeholder: 'Enter your Age here'
    }
}).then(function(res) {
    var age = res.value;
    if (age <= 10) {
        counter(10);
    } else if (age >= 50) {
        counter(10)
    }
}).then(function() {

    botui.message.add({
        delay: 500,
        loading: true,
        content: 'Ok, Next question!'
    });
    botui.message.add({
        delay: 700,
        loading: true,
        content: 'Do you have any symptoms of COVID-19 (Cough, Fever, Breathing Trouble,etc.)?'
    });
    botui.action.button({
        action: [{
                text: 'Yes, some of them.',
                value: 5
            },
            {
                text: 'Yes, all of them.',
                value: 10
            },
            {
                text: 'None of them',
                value: 0
            }
        ]
    }).then(function(res) {
        counter(res.value);
    }).then(function() {

        botui.message.add({
            delay: 500,
            loading: true,
            content: 'Ok, Next one!'
        });
        botui.message.add({
            delay: 700,
            loading: true,
            content: 'Have you traveled to a foreign country in the past 15 days?'
        });
        botui.action.button({
            action: [{
                    text: 'Yes',
                    value: 5
                },
                {
                    text: 'No',
                    value: 0
                }
            ]
        }).then(function(res) {
            counter(res.value);
        }).then(function() {

            botui.message.add({
                delay: 500,
                loading: true,
                content: 'Ok, Next Question!'
            });
            botui.message.add({
                delay: 700,
                loading: true,
                content: 'Have you met or lived with anyone who is either a foreigner or is dignosed with COVID - 19?'
            });
            botui.action.button({
                action: [{
                        text: 'Yes',
                        value: 10
                    },
                    {
                        text: 'No',
                        value: 0
                    }
                ]
            }).then(function(res) {
                counter(res.value);
            }).then(function() {
                botui.message.add({
                    delay: 700,
                    loading: true,
                    content: 'Are you a health worker who is serving COVID-19 patients?'
                });
                botui.action.button({
                    action: [{
                            text: 'Yes',
                            value: 10
                        },
                        {
                            text: 'No',
                            value: 0
                        }
                    ]
                }).then(function(res) {
                    counter(res.value);
                }).then(function() {
                    botui.message.add({
                        delay: 700,
                        loading: true,
                        content: 'Do you have any prior Illnesses (Diabetes , Heart Problem, etc.)?'
                    });
                    botui.action.button({
                        action: [{
                                text: 'Yes',
                                value: 5
                            },
                            {
                                text: 'No',
                                value: 0
                            }
                        ]
                    }).then(function(res) {
                        counter(res.value);
                    }).then(function() {
                        botui.message.add({
                            delay: 700,
                            loading: true,
                            content: 'Are you immuno-compromised (on immune system depressing medication)?'
                        });
                        botui.action.button({
                            action: [{
                                    text: 'Yes',
                                    value: 5
                                },
                                {
                                    text: 'No',
                                    value: 0
                                }
                            ]
                        }).then(function(res) {
                            counter(res.value);
                        }).then(function() {
                            botui.message.add({
                                delay: 700,
                                loading: true,
                                content: 'Do you feel shortness of breath?'
                            });
                            botui.action.button({
                                action: [{
                                        text: 'Yes',
                                        value: 10
                                    },
                                    {
                                        text: 'No',
                                        value: 0
                                    }
                                ]
                            }).then(function(res) {
                                counter(res.value);
                            }).then(function() {
                                botui.message.add({
                                    delay: 700,
                                    loading: true,
                                    content: 'So your results are!'
                                }).then(function() {
                                    var respCode = evaluateRisk();

                                    if (respCode == 0) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>LOW<b/></h1>   <h3> Your risk of getting COVID-19 is Low. But you should remain inside your home and not go out. </h3> <h5>*This report is also affected by the number of COVID-19 cases in the country you live in.<br/>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above professional advice !</h5> <br/> <a href="index.html">Go to Home Page.</a></center>'
                                        });
                                    } else if (respCode == 1) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>MILD<b/></h1>   <h3>Your risk of getting COVID-19 infection is MILD, but dont panic.<br/> You should stay inside your home and seek for medical help if needed.</h3> <h5>*This report is also affected by the number of COVID-19 cases in the country you live in.<br/>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above medical advice !</h5><br/><a href="index.html">Go to Home Page.</a> </center>'
                                        });
                                    } else if (respCode == 2) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>HIGH<b/></h1>   <h3>Your risk of getting COVID-19 infection is HIGH, but dont panic.<br/> You should rest inside your home and seek for medical help as soon as possible.</h3> <h5>*This report is also affected by the number of COVID-19 cases in the country you live in.<br/>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above medical advice !</h5><br/><a href="index.html">Go to Home Page.</a> </center>'
                                        });
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})



fetch('https://covidapi.info/api/v1/country/' + country + '/latest')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        window.stats = data;
    });

fetch('https://covidapi.info/api/v1/global')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        window.globalStats = data;
    });

function evaluateRisk() {
    var countryData = stats.result[Object.keys(stats.result)].confirmed;
    var GlobalData = globalStats.result.confirmed;

    var percentage = countryData / GlobalData * 100;
    count += Math.floor(percentage)

    if (count <= 15) {
        return 0;
    } else if (count > 15 && count <= 40) {
        return 1;
    } else if (count > 40) {
        return 2;
    }
}