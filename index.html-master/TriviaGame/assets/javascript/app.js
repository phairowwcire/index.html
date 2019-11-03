<script>
                var timer var_condition:timer 0;
                var timeLimit: 120;

                function Update() {
                    timer += Time.deltaTime;
                    if (timer >= timeLimit) {

                        document.getElementById("form1").onsubmit = function () {
                            variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
                            sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
                            con = parseInt(document.querySelector('input[name = "con"]:checked').value);
                            ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);


                            result = variable + sub + con + ifstate;

                            document.getElementById("grade").innerHTML = result;

                            grading = [
                                { score: 0, feedback: "You probably get Star Wars and Star Trek confused", image: "https://imgbb.com/"><img src="https://i.ibb.co/0rgSXYM/not-smart.jpg },
                                { score: 25, feedback: "There are Sand People smarter than you", image: "https://imgbb.com/"><img src="https://i.ibb.co/WVb1sC3/1719b71731ef64134ade238b841e0532.png },
                                { score: 50, feedback: "Not bad Padawan. Try again.", image: "https://imgbb.com/"<img src="https://i.ibb.co/W3bnHZr/5-differences-between-horses-as-a-hobby-and-as-a-career-lots-to-learn.jpg },
                                { score: 75, feedback: "There may be a New Hope!", image: "https://imgbb.com/"<img src="https://i.ibb.co/cwd2ybg/CWsb-AOIUk-AANsx-S.jpg }",
                                { score: 100, feedback: "Excellent! I sense The Force is strong in you! Stop shaking my screen, that's not funny", image: "https://imgbb.com/"><img src="https://i.ibb.co/4j11tQn/master-joda.png },
                            ];

                            for (i = 0; i < grading.length; i++) {
                                if (result == grading[i].score) {
                                    result2 = grading[i].feedback + "<br/><img src='" + grading[i].image + "' width='300'  />";
                                
                          
                        
                    
            
{
                    document.getElementById("grade2").innerHTML = result2;

                    return false; 
                } 
            </script>