
var msgs = [];
var index= 2;
var num_msg = 2;
var last_box = block1;


var block1 = document.getElementById("block1");

var block2 = document.getElementById("block2");
msgs.push(block1);
msgs.push(block2);

function send(){
    var msg = document.getElementById("textarea").value;

    var block = document.createElement('div');
    block.setAttribute("id",""+num_msg);

    var recall = document.createElement('button');

    recall.onclick = function(){remove(block.id)};
    recall.innerHTML = "Recall";
    recall.setAttribute("class","recall");

    var box = document.createElement('div');
    box.setAttribute("class","message_box");

    if(num_msg%4==0){
        box.style.backgroundColor = '#F9E79F';

    }
    else if (num_msg%4==1){
        box.style.backgroundColor = '#F4D03F';
    }
    else if (num_msg%4==2){
        box.style.backgroundColor = '#FFA07A';
    }
    else{
        box.style.backgroundColor = '#DAF7A6'; 
    }

    var bg_color = box.style.backgroundColor;

    block.appendChild(box);
    block.appendChild(recall);
    var textnode = document.createTextNode(msg + "    --------Customer");
    box.appendChild(textnode);

    var block1 = document.getElementById("block1");
    if(num_msg==2) last_box = block1;

    var msg_boxes = document.getElementById("msg_boxes");
    msg_boxes.insertBefore(block,last_box);

    num_msg++;
    index++;
    last_box = block;

    msgs.push(block);
}


function remove(id){
    //var b= document.getElementById(id);

    //var block = msgs.pop();
    var index = parseInt(id);
    var msg_boxes = document.getElementById("msg_boxes");
    var child = document.getElementById(id);
    msg_boxes.removeChild(child);
    num_msg--;
}