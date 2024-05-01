function submitAnswers() {
    var form = document.getElementById("mcqForm");
    var score = 0;
    var resultsDiv = document.getElementById("results");

    // Get selected answers and check correctness
    var q1Answer = form.elements["q1"].value;
    if (q1Answer === "paris") {
        score++;
    }

    // Add more questions' scoring logic here

    // Display results
    resultsDiv.innerHTML = "Your score is: " + score;
}
