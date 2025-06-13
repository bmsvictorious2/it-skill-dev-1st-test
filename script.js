function checkAnswers() {
    let totalMarks = 0;

    // Get Student's Name
    const studentName = document.getElementById("studentName").value;

    // Display Student's Name
    document.getElementById("displayName").innerText = studentName
        ? `Student Name: ${studentName}`
        : "Student Name: Not Provided";

    // Question 1: Regression (Predicting the price of a car)
    const q1_price = document.querySelectorAll('input[type="checkbox"]')[0].checked;
    const q1_spam = document.querySelectorAll('input[type="checkbox"]')[1].checked;
    if (q1_price && !q1_spam) totalMarks += 10;

    // Question 2: Classification (Dog or not)
    if (document.getElementById("question2").value === "Both a,b & c") totalMarks += 10;

    // Question 3: Image resolution
    const q3 = document.querySelector('input[name="workloadAI"]:checked');
    if (q3 && q3.value === "Regression") totalMarks += 10;

    // Question 4: RGB
    const q4 = document.querySelector('input[name="train"]:checked');
    if (q4 && q4.value === "label") totalMarks += 10;

    // Question 5: Color range
    if (document.getElementById("question5").value === "Binary Classification") totalMarks += 10;

   
    // Question 7: Computer Vision task
    if (document.getElementById("question7").value === "label") totalMarks += 10;

    // Question 8: Image segmentation
    if (document.getElementById("question8").value === "feature") totalMarks += 10;

    // Question 9: Clustering
    const q9 = document.querySelector('input[name="AI"]:checked');
    if (q9 && q9.value === "artificiallife") totalMarks += 10;

    // Question 10: Accuracy from image
    const q10 = document.querySelector('input[name="images"]:checked');
    if (q10 && q10.value === "levenlas") totalMarks += 10;

    // Question 11: Feature and label detection
    const q11 = document.querySelector('input[name="image"]:checked');
    if (q11 && q11.value === "sty") totalMarks += 5;
// Question 11: Feature and label detection
    const q12 = document.querySelector('input[name="im"]:checked');
    if (q12 && q12.value === "stiy") totalMarks += 5;
    // Redirect to results page
    const resultURL = `result.html?name=${encodeURIComponent(studentName)}&marks=${totalMarks}`;
    window.location.href = resultURL;
}
