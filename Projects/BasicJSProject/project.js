let my_user = null;
const red_block = document.getElementById('red_block');
const green_block = document.getElementById('green_block');
const blue_block = document.getElementById('blue_block');

const pro_user = document.getElementById('pro_user');

const btn_add_user = document.getElementById('btn_add_user');
const btn_delete_user = document.getElementById('btn_delete_user');

const btn_Move_to_Red = document.getElementById('btn_Move_to_Red');
const btn_Move_to_green = document.getElementById('btn_Move_to_green');
const btn_Move_to_blue = document.getElementById('btn_Move_to_blue');
const btn_Move_to_yellow = document.getElementById('btn_Move_to_yellow');

function addUserToProject(){
   
    if (my_user == null){
        

        my_user = document.createElement("div");
    
        // add some class for styling
        my_user.className = "my_user";
    
        // add some id for better from anywhere
        my_user.setAttribute("id","my_user");
    
        // value from input box
        my_user.innerHTML = pro_user.value;
        pro_user.disabled = true;
        btn_add_user.disabled = true;
        btn_delete_user.disabled = false;
        
        red_block.append(my_user);

    }
    
   
}
function deleteUserFromProject(){
    if (my_user != null){
        my_user.remove();
        pro_user.disabled = false;
        btn_add_user.disabled = false;
        btn_delete_user.disabled = true;
        pro_user.value = "";
    }
}

function moveToRed(){
    
    red_block.append(my_user);
}



function moveToGreen(){
    
    green_block.append(my_user);
}



function moveToBlue(){
    
    blue_block.append(my_user);

}


function moveToYellow(){
    
    yellow_block.append(my_user);

}


btn_add_user.addEventListener('click', addUserToProject);
btn_delete_user.addEventListener("click",deleteUserFromProject);
btn_Move_to_Red.addEventListener("click",moveToRed);
btn_Move_to_green.addEventListener("click", moveToGreen);
btn_Move_to_blue.addEventListener("click", moveToBlue);
btn_Move_to_yellow.addEventListener("click",moveToYellow);

