var mouseEvent="empty";


canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");
color="red";
lineWidht=1;



canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
color=document.getElementById("colour").value;
linewidht=document.getElementById("linewidth").value;
mouseEvent="mouseDown"
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
 
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidht=linewidht;
       
       

        console.log("current position of x and y coordinates = ");
        console.log("x = "+current_position_of_x+" y = "+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);

        ctx.stroke();
    }

   
}





canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e)
{
 mouseEvent="mymouseup";      
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e)
{
 mouseEvent="mymouseleave";      
}
function clear()
{
ctx.clearRect(0,0,canvas.width,canvas.height);    
}