/***************************** */
/*      Titan Hacks 2020      */
/**************************** */
var botui = new BotUI('my-botui-app');

var count = 0;

function counter(val) {
    count += val;
}

botui.message.add({
    delay: 500,
    loading: true,
    content: 'Hey, Lets check if you have any symptoms of the Corona Virus.'
});
botui.message.add({
    delay: 700,
    loading: true,
    content: 'Are you having any trouble breathing?'
})
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
        delay: 500,
        loading: true,
        content: 'Ok, Next question!'
    });
    botui.message.add({
        delay: 700,
        loading: true,
        content: 'Do you have a Fever?'
    });
    botui.action.button({
        action: [{
                text: 'Yes, A mild one.',
                value: 5
            },
            {
                text: 'Yes, A High one.',
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
            delay: 500,
            loading: true,
            content: 'Ok, Next one!'
        });
        botui.message.add({
            delay: 700,
            loading: true,
            content: 'Do you have any sort of cough?'
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
                delay: 500,
                loading: true,
                content: 'Ok, Next Question!'
            });
            botui.message.add({
                delay: 700,
                loading: true,
                content: 'Do you have a runny nose?'
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
                    content: 'Are you feeling fatigued/tired/exhausted?'
                });
                botui.action.button({
                    action: [{
                            text: 'Yes',
                            value: 1
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
                        content: 'Do you have any prior lung disease?'
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
                            content: 'Do you feel any heaviness in your lungs?'
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
                                    content: 'Do you feel any pain in your chest?'
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
                                        content: 'So the results are!'
                                    });
                                    var respCode = evaluateSymptoms();
                                    if (respCode == 0) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>LOW<b/></h1>   <h3>You do not have any symptoms of COVID-19 infection.<br/> But you should stay inside your home and not go out.</h3> <h5>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above medical advice !</h5><br/><a href="index.html">Go to Home Page.</a> </center>'
                                        });
                                    } else if (respCode == 1) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>MILD<b/></h1>   <h3>You show mild symptoms of COVID-19 infection, but dont panic.<br/> You should stay inside your home and seek for medical help if needed.</h3> <h5>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above medical advice !</h5><br/> <a href="index.html">Go to Home Page.</a></center>'
                                        });
                                    } else if (respCode == 2) {
                                        botui.message.add({
                                            delay: 2000,
                                            loading: true,
                                            type: 'html',
                                            content: '  <center> <h1>Your result is: <b>HIGH<b/></h1>   <h3>You show multiple symptoms of COVID-19 infection, but dont panic.<br/> You should rest inside your home and seek for medical help as soon as possible.</h3> <h5>*This is not a medical report and this report is formulated on estimation basis.<br/> Do not consider this report above medical advice !</h5><br/><a href="index.html">Go to Home Page.</a> </center>'
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

function evaluateSymptoms() {
    var response;
    if (count <= 15) {
        response = 0;
    } else if (count > 15 && count <= 40) {
        response = 1;
    } else if (count > 40) {
        response = 2;
    }

    return response;
}