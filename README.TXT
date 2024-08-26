01. DOM MANIPULATION

    *The DOM is a part of the Web API's
    *document.querySelector(""). - THIS CAN BE A SERIES OF THINGS
                               .textContent = changes the text content of the element
                               .value = returns the value stored at this element
                               .addEventListener = so far we use this incase of a click the syntax is : ("click", function)

02. ------------------------------------------------------------------------------

05. HOUSEKEEPING 

    *Make a score variable start at 20
    *Make a Highscore variable starting at 0 (will be decremented)
    *Random variable which will contain the answer!

04. SCORE

        * The score starts at 20 and goes down for each wrong click
             = if score : correct ("correct", make current score High score) || score wrong : score smaller ("too small" -1 point), score higher ("too high" -1 point)
        *The high Score is the closest number to 20
             = if score : correct ("correct", make current score High score) BUT if new score > old score. Highscore = new score

04. INPUT

        *use document.querySelector to get the value of the ("input")
        *addEventListener to turn the value of the input into a variable and then also compare it with variable