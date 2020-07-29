let input = document.getElementById("txt");
let items = document.querySelectorAll("#list li");
let tab = [],index;

for (var i = 0; i<items.length;i++){
    tab.push(items[i].innerHTML);
}

for(var i = 0; i < items.length; i++){
                 
    items[i].onclick = function(){
        index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index);
        inputText.value = this.innerHTML;
    };
}

function add(){

    var listNode = document.getElementById("list"),
    textNode = document.createTextNode(input.value),
    liNode = document.createElement("LI");
                    
    liNode.appendChild(textNode);
    listNode.appendChild(liNode)

}

function refreshArray()
            {
                tab.length = 0;
                items = document.querySelectorAll("#list li");
                for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
               }
            }

function del(){
    refreshArray();
    if(items.length > 0){
        items[index].parentNode.removeChild(items[index]);
        inputText.value = "";
    }
}
