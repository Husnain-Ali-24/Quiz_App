let cPlusPlusMCQs = [
    {
        question: "Which of the following is not a valid C++ data type?",
        options: {
            0: "a. char",
            1: "b. float*",
            2: "c. string",
            3: "d. void"
        },
        answer: "b. float*"
    },
  {
      question: "What is the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    int *ptr = &x;\n    cout << *ptr + 2;\n    return 0;\n}\n",
      options: {
          0: "a. 5",
          1: "b. 7",
          2: "c. 2",
          3: "d. 9"
      },
      answer: "b. 7"
  },
  {
      question: "Which of the following is not a valid C++ identifier?",
      options: {
          0: "a. myVar",
          1: "b. _var",
          2: "c. 3var",
          3: "d. var3"
      },
      answer: "c. 3var"
  },
  {
      question: "What is the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 10;\n    int &ref = x;\n    ref = 20;\n    cout << x;\n    return 0;\n}\n",
      options: {
          0: "a. 10",
          1: "b. 20",
          2: "c. Compiler Error",
          3: "d. 30"
      },
      answer: "b. 20"
  },
  {
      question: "What does the following statement do in C++?\n\ndelete ptr;",
      options: {
          0: "a. Deletes the memory pointed by ptr",
          1: "b. Deletes the pointer ptr",
          2: "c. Deletes the variable pointed by ptr",
          3: "d. Deletes the memory allocated on stack"
      },
      answer: "a. Deletes the memory pointed by ptr"
  },
  {
      question: "What does the following C++ statement do?\nint* ptr;",
      options: {
          0: "a. Declares a pointer variable named ptr",
          1: "b. Declares an integer variable named ptr",
          2: "c. Declares a reference variable named ptr",
          3: "d. Declares a function pointer named ptr"
      },
      answer: "a. Declares a pointer variable named ptr"
  },
  {
      question: "What is the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {1, 2, 3, 4, 5};\n    int *ptr = arr;\n    cout << *(ptr + 3);\n    return 0;\n}\n",
      options: {
          0: "a. 1",
          1: "b. 2",
          2: "c. 3",
          3: "d. 4"
      },
      answer: "d. 4"
  },
  {
      question: "In C++, the cin object is an instance of which class?",
      options: {
          0: "a. istream",
          1: "b. ostream",
          2: "c. ifstream",
          3: "d. ofstream"
      },
      answer: "a. istream"
  },
  {
      question: "Which C++ keyword is used to declare a class that cannot be instantiated?",
      options: {
          0: "a. private",
          1: "b. public",
          2: "c. static",
          3: "d. abstract"
      },
      answer: "d. abstract"
  },
  {
      question: "What is the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 5, b = 10;\n    int *ptr1 = &a, *ptr2 = &b;\n    int temp = *ptr1;\n    *ptr1 = *ptr2;\n    *ptr2 = temp;\n    cout << a << ' ' << b;\n    return 0;\n}\n",
      options: {
          0: "a. 5 5",
          1: "b. 10 10",
          2: "c. 10 5",
          3: "d. 5 10"
      },
      answer: "c. 10 5"
  },
];
let front_page=document.querySelector(".front_page");
let question_heading=document.querySelector(".question_heading");
let options=document.querySelectorAll(".option");
let next_button=document.querySelector(".next_button");
let remaining_question_counter=document.querySelector(".remaining_question_counter");
let result_page=document.querySelector(".result_page");
let Questions_page=document.querySelector(".Questions_page");
let final_score=document.querySelector(".final_score");
let congratulaion_message=document.querySelector(".congratulaion_message");
let fail_message=document.querySelector(".fail_message");
let rem_time=document.querySelector(".rem_time");
let start_quiz_button=document.querySelector(".start_quiz_button");
let restart_button=document.querySelector(".restart_button");

function startQuiz(){
    start_quiz_button.addEventListener("click",()=>{
        front_page.classList.add("hidden");
        Questions_page.classList.remove("hidden");

        timer_start();
    })
    let Time;
    let score=0;
    let index=0;
    
    function Final_Result_Page(){
        Questions_page.classList.add("hidden");
        result_page.classList.remove("hidden");
        if(score>=50){
            congratulaion_message.classList.remove("hidden");
            fail_message.classList.add("hidden");
        }
        else if(score<50){
            fail_message.classList.remove("hidden");
            congratulaion_message.classList.add("hidden");
        }
        final_score.innerText=score;
    }
    
    function timer_start(){
        let start_time=29;
        Time=setInterval(changeTime,1000);
        function changeTime(){
            if(start_time>=0){
                rem_time.innerText=start_time;
                start_time--;
            }
            else{
                clearInterval(Time);
                Final_Result_Page();
            }
        }
    }
    
    
    function reset_outline(){
        for(let i=0;i<4;i++){
            if(options[i].classList.contains("bg-green-600")){
                options[i].classList.remove("bg-green-600");
            }
            if(options[i].classList.contains("outline", "outline-green-500")){
                options[i].classList.remove("outline", "outline-green-500");
            }
            if(options[i].classList.contains("bg-red-100")){
                options[i].classList.remove("bg-red-100");
            }
        }
    }
    let counter=0;
    function mcqs_page(index){
        reset_outline();
        counter++;
        remaining_question_counter.innerText=counter;
        question_heading.innerText=cPlusPlusMCQs[index].question;
        let  ans=cPlusPlusMCQs[index].answer;
        if(counter==cPlusPlusMCQs.length){
            next_button.innerText="Finish";
            next_button.addEventListener("click",()=>{
                Final_Result_Page();
            })
        }
        function options_text(){
            for(let i=0;i<4;i++){
                options[i].innerText=cPlusPlusMCQs[index].options[i];
            }
        }
        function correct_option(){
            for(let i=0;i<4;i++){
                if(options[i].innerText===ans){
                    options[i].classList.add("outline", "outline-green-500");
                }
            }
        }
        options.forEach((option)=>{
            options_text();
            option.addEventListener("click",()=>{
            if(option.innerText===ans){
                score+=10;
                reset_outline();
                option.classList.add("bg-green-600");
            }
            else 
            {
                option.classList.add("bg-red-100");
                correct_option();
            }
            })
        })
        
    }
    
    mcqs_page(index);
    next_button.addEventListener("click",()=>{
        if(counter==cPlusPlusMCQs.length){
            return;
        }
        else{
            index++;
            mcqs_page(index);
            congratulaion_message.classList.add("hidden");
            fail_message.classList.add("hidden");
        }
    })
}
startQuiz();