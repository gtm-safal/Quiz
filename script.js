function clicked() {
    var score = 0;
    var comp;

    // Question 1
    var options1 = document.getElementsByName("option1");
    for (var i = 0; i < options1.length; i++) {
        if (options1[i].checked && options1[i].value === "Ram Chandra Poudel") {
            score++;
        }
    }

    // Question 2
    var options2 = document.getElementsByName("option2");
    for (var i = 0; i < options2.length; i++) {
        if (options2[i].checked && options2[i].value === "Demon Slayer") {
            score++;
        }
    }

    // Question 3
    var options3 = document.getElementsByName("option3");
    for (var i = 0; i < options3.length; i++) {
        if (options3[i].checked && options3[i].value === "10") {
            score++;
        }
    }

    // Question 4
    var options4 = document.getElementsByName("option4");
    for (var i = 0; i < options4.length; i++) {
        if (options4[i].checked && options4[i].value === "Hinduism") {
            score++;
        }
    }

    // Question 5
    var options5 = document.getElementsByName("option5");
    for (var i = 0; i < options5.length; i++) {
        if (options5[i].checked && options5[i].value === "निन्द्रा") {
            score++;
        }
    }

    if(score == 5)
    comp = 'Outstanding';

    else if (score==4)
    comp = 'Excellent';

    else if(score==3)
    comp = 'Good';

    else
    comp = 'Work hard';
    document.getElementById("final").innerHTML ="*** "+comp+ "! You scored " + score + " in the quiz out of 5 ***";
    
}
function accordion(){
    var accordionContent = document.getElementById("start");
    if (accordionContent.style.display === "none" || accordionContent.style.display === "") 
    {
        accordionContent.style.display = "block";
    } 
    else {
        accordionContent.style.display = "none";
    }
}