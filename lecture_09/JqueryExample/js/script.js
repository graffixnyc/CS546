const myForm = document.getElementById("myForm");

  if (myForm) {
    const textInput = document.getElementById("text_input");
    myForm.addEventListener("submit", event => {
        //We need to prevent the default behavior of the form submit
        event.preventDefault();
        //Now we check to make sure the user entered a value in the input box
        //We are only concerned if they entered something, we do not need to
        //validate if it's a number, string etc.. in this example
        if (textInput.value){
            //we hide the error div in case it's visible
            $("#error").hide();
            //We create the list item element
            const li = `<li> ${textInput.value} </li>`
            //we add the li element created above to the UL
            $("#myList").append(li);
            //We then reset the form
            $("#myForm").trigger('reset');
        }else{
            //If the user did not enter input, we show the error div and text
            $("#error").show();
            $("#error").html("You Need to supply an input value!");
        }
       
    });
  }