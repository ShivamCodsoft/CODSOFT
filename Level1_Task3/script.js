let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "0"; // Initialize the string to "0"
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string).toString();
                input.value = string;
            } catch (error) {
                string = "Error";
                input.value = string;
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "0"; 
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            if (string === "") {
                string = "0"; 
            }
            input.value = string;
        } 
        else {
            if (string === "0") {
                string = e.target.innerHTML;
            } else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
    })
});
