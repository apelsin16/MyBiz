let rootDir = document.querySelector(".root-directory");
let pathInput = document.querySelector(".path-input");

let directories = document.querySelectorAll(".deep-dirs > li");

pathInput.setAttribute("placeholder", rootDir.innerText);

for (let i=0; i < directories.length; i++) {
    directories[i].addEventListener("click", function() {
        
        let dirsText = directories[i].innerText;

        pathInput.setAttribute("placeholder", rootDir.innerText + " / " + dirsText);
    });
};