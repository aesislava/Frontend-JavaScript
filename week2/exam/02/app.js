        $(document).ready(function () {
            window.timeCounter = 0;
            window.myIntervalId;
            window.userInputTime = 0;


            var refreshTime = function() {

                var minutes1 = parseInt(timeCounter/60);
                var seconds1 = parseInt(timeCounter%60);
                var min1 = $("#minute-first-digit");
                min1.empty();
                min1.append(parseInt(minutes1/10));
                var min2 = $("#minute-second-digit");
                min2.empty();
                min2.append(parseInt(minutes1%10));

                var sec1 = $("#second-first-digit");
                sec1.empty();
                sec1.append(parseInt(seconds1/10));

                var sec2 = $("#second-second-digit");
                sec2.empty();
                sec2.append(parseInt(seconds1%10));
            }; 

            var resetTimer = function() {
                timeCounter = 0;
                if(typeof myIntervalId != 'undefined') {                    
                    clearInterval(myIntervalId);
                }
                refreshTime();
            };

            $("#buttons button:nth-of-type(1)").on("click", function () {
                resetTimer();
                var minutes = $("#minutes").val().toString();
                var seconds = $("#seconds").val().toString();
                userInputTime = parseInt(minutes)*60 + parseInt(seconds);
                timeCounter = 0;
                var countUpOneSecond = function() {
                    timeCounter++;
                    refreshTime();
                    if (timeCounter >= userInputTime) {
                        clearInterval(myIntervalId);
                    }
                };
                refreshTime();
                myIntervalId = setInterval(countUpOneSecond, 1000);
            });

            $("#buttons button:nth-of-type(2)").on("click", function () {
                resetTimer();
                var minutes = $("#minutes").val().toString();
                var seconds = $("#seconds").val().toString();
                timeCounter = parseInt(minutes)*60 + parseInt(seconds);

                var countDownOneSecond = function() {
                    timeCounter--;
                    refreshTime();
                    if (timeCounter === 0) {
                        clearInterval(myIntervalId);
                    }
                };
                refreshTime();
                myIntervalId = setInterval(countDownOneSecond, 1000);
            });

            $(".btn.btn-danger").on("click", resetTimer);

        });