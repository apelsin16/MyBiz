let RegistrationInputs = function() {
    let mainPhoneNumber = document.getElementById("register-number");
    let mainMail = document.getElementById("main-email");

    let optPhoneNumber = document.querySelector(".optional-input-number");
    let optMail = document.querySelector(".optional-input-email");

    let userSex = document.querySelector("#optional-sex");
    let userPhoto = document.querySelector(".optional-image");

    this.mainInput = function() { // Make required one of the inputs
        mainPhoneNumber.setAttribute("required", "");
        mainMail.setAttribute("required", "");

        mainPhoneNumber.addEventListener(
            "keydown", function(){
                if (mainPhoneNumber.length !== 0) {
                    mainMail.removeAttribute("required");
                }
            }
        );
    }

    this.optionalInput = function () {
        if (mainPhoneNumber.innerText.length !== 0) {
            optPhoneNumber.style.display = "none";
        } else if (mainMail.innerText.length !== 0) {
            optMail.style.display = "none";
        }
    }

    /* this.setDefaultUserPhoto = function () {
        userSex.addEventListener("click", function() {
            if (userSex.value === "Мужской") {
                userPhoto.src = "../images/default-user-man.png";
            } else if (userSex.value === "Женский") {
                userPhoto.src = "../images/default-user-woman.png";
            }
        });
    } */
};

let MyBizRegForm = new RegistrationInputs();

MyBizRegForm.mainInput();
MyBizRegForm.optionalInput();

// MyBizRegForm.setDefaultUserPhoto();
