const questions = [
    {
        questionText: `Complete the function sum such that it sums the 2 numbers it receives.
        function sum(x, y) {
  
        _____________ }`,

        answerOptions: [
            { answerText: `return x + y`, isCorrect: true },
            { answerText: `return x * y`, isCorrect: false },
            { answerText: `x + y`, isCorrect: false }
        ]
    },
    {
        questionText: `Which one of these functions calculates the multiplication of x * y?`,

        answerOptions: [
            {
                answerText: `function multiply (x, y) {
                return x + y;
            }`, isCorrect: false
            },
            {
                answerText: `function multiply (x, y) {
                return x * y;
            }`, isCorrect: true
            },
            {
                answerText: `function multiply(x, y) {
                x * y;
            }`, isCorrect: false
            }
        ]
    },
    {
        questionText: ` Complete the function such that it returns true for passing grades and false otherwise (9 and below are failing grades).
        function isPassing(grade) {
            _______________
        }`,
        answerOptions: [
            {
                answerText:
                    `if grade >= 10 {
                    return true;
                } else {
                    return false;
            }`,
                isCorrect: false
            },
            {
                answerText:
                    `if (grade >= 10) {
                    true;
                } else {
                    false;
                }`,
                isCorrect: false
            },
            {
                answerText:
                    `if (grade >= 10) {
                    return true;
                }  else {
                    return false;
                }`,
                isCorrect: true
            }

        ]

    },
    {
        questionText: `What is the correct way to define a sum variable in Javascript?`,
        answerOptions: [
            {
                answerText:
                    `let sum = 0`,
                isCorrect: true
            },
            {
                answerText:
                    `const sum = 0`,
                isCorrect: false
            },
            {
                answerText:
                    `var sum = 0`,
                isCorrect: false
            },
        ]
    },
]






