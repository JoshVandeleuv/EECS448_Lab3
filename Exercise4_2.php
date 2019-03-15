<?php
#gather answers and store in local variables
  $answerOne = $_POST["q1"];
  $answerTwo = $_POST["q2"];
  $answerThree = $_POST["q3"];
  $answerFour = $_POST["q4"];
  $answerFive = $_POST["q5"];
  $totalCorrect = 0;
  #test the answers against the correct answers and output the results

  #Question 1
  echo "Question 1: In which language was the book 'War and Peace' originally written?<br>";
  echo "You answered: ";
  if($answerOne == 'A')
  {
    echo "Russian<br>";
    $totalCorrect +=1;
  }
  if($answerOne == 'B')
  {
    echo "French<br>";
  }
  if($answerOne == 'C')
  {
    echo "German<br>";
  }
  if($answerOne == 'D')
  {
    echo "English<br>";
  }
  echo "Correct answer: Russian<br><br>";

  #Question 2
  echo "Question 2: How many spaces are on a standard Monopoly board?<br>";
  echo "You answered: ";
  if($answerTwo == 'A')
  {
    echo "20<br>";
  }
  if($answerTwo == 'B')
  {
    echo "40<br>";
    $totalCorrect +=1;
  }
  if($answerTwo == 'C')
  {
    echo "60<br>";
  }
  if($answerTwo == 'D')
  {
    echo "80<br>";
  }
  echo "Correct answer: 40<br><br>";

  #Question 3
  echo "Question 3: Which president is furthest left on the Mount Rushmore National Memorial?<br>";
  echo "You answered: ";
  if($answerThree == 'A')
  {
    echo "George Washington<br>";
    $totalCorrect +=1;
  }
  if($answerThree == 'B')
  {
    echo "Thomas Jefferson<br>";
  }
  if($answerThree == 'C')
  {
    echo "Abraham Lincoln<br>";
  }
  if($answerThree == 'D')
  {
    echo "Theodore Roosevelt<br>";
  }
  echo "Correct answer: George Washington<br><br>";

  #Question 4
  echo "Question 4: Which of these countries was not a Soviet Republic in the USSR?<br>";
  echo "You answered: ";
  if($answerFour == 'A')
  {
    echo "Moldova<br>";
  }
  if($answerFour == 'B')
  {
    echo "Kyrgyzstan<br>";
  }
  if($answerFour == 'C')
  {
    echo "Serbia<br>";
    $totalCorrect +=1;
  }
  if($answerFour == 'D')
  {
    echo "Azerbaijan<br>";
  }
  echo "Correct answer: Serbia<br><br>";

  #Question 5
  echo "Question 5: Which movie was the first to win 11 Academy Awards?<br>";
  echo "You answered: ";
  if($answerFive == 'A')
  {
    echo "Ben-Hur<br>";
    $totalCorrect +=1;
  }
  if($answerFive == 'B')
  {
    echo "La La Land<br>";
  }
  if($answerFive == 'C')
  {
    echo "Titanic<br>";
  }
  if($answerFive == 'D')
  {
    echo "Sound of Music<br>";
  }
  echo "Correct answer: Ben-Hur<br><br>";

#calculate the score as a percentage
  $percentCorrect = $totalCorrect * 20;

#output final score
  echo "<b>Total correct:" . $totalCorrect . " / 5</b><br>";
  echo "<b>Score: " . $percentCorrect . "%</b><br>";
?>
