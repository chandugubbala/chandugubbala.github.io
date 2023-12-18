//var addbutton=document.getElementById("add");
function newelement(){
    if(document.querySelector('input').value.length==0){
        alert("enter task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('input').value}
                </span>
                <button class="delete">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
            `;
        var current_items=document.querySelectorAll(".delete")
        for(i=0;i<=current_items.length;i++)
        {
            current_items[i].onclick=function(){
                this.parentNode.remove();
            }
        }
    }
    
}
