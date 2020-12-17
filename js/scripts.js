//#list is the ID for the entire <ol>
//'li' is each empty <li> container
//inputValue is the innerText entered into the input field, translated to <li>

//all code is within function newItem() as that's what's being enacted when <div> is clicked:

function newItem(){
//add new values to list:
    let li = $("<li></li>");
    let inputValue = $("#input").val();
    li.append(inputValue);
    $('#list').append(li);

//add the "x" to each li, 
    let closeX = $('<xbutton> X</xbutton>');
    li.append(closeX);

//crossing out list item with click
    li.on("click", function() {
        li.addClass("strike");
    });

 //delete items with "x"
    closeX.on("click", function(){
        li.addClass("delete");
    });

//reorder items in list, needs "Sortable UI"
    $("#list").sortable();
};

