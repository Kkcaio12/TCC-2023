const inputFile = document.getElementById("fileimp")
const FileSub = document.getElementById("subFile")
const filediv = document.getElementById("filediv")

FileSub.addEventListener('click', () => {
    event.preventDefault();

    const fileList = inputFile.files;

    filetolink(fileList);
})

function filetolink(file){
    if(file === undefined){
        alert("Please select a file");
        return; 
    }

    for(i = 0; i < inputFile.files.length; i++){
        const fileimg = document.createElement("i");

        if(file[i].type.startsWith('audio/')){

        }
        if(file[i].type.startsWith('text/')){
            fileimg.classList.add("fa-solid")
            fileimg.classList.add("fa-file-word")
        }

        const fileInfo = document.createElement("div")
        fileimg.style.fontSize = "50px";

        var filelink = document.createElement("a");
        filelink.innerHTML = file[i].name;
        filelink.target = "blank";

        filediv.appendChild(fileInfo);
        fileInfo.appendChild(filelink);
        fileInfo.appendChild(fileimg);
        
        fileInfo.style.display = "flex";
        fileInfo.style.flexDirection = "column-reverse";
        const filename = file[i].name;

        /*filelink.addEventListener('click', () => {
            filelink.download = filename;
        })*/

        filelink.href = window.URL.createObjectURL(file[i]);
    }

}

