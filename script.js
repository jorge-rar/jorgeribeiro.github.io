const roles = [
    "Continuous Improvement Engineer",
    "Material Flow & Logistics Engineer",
    "Industrial Data Analyst",
    "Project Controls Engineer",
    "Manufacturing Process Engineer",
    "Supplier Quality & Technical Procurement Engineer"
];


const typingElement =
    document.getElementById("typing-text");


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


const typingSpeed = 55;

const deletingSpeed = 32;

const pauseAfterTyping = 1800;

const pauseAfterDeleting = 500;


function typeRole() {

    const currentRole =
        roles[roleIndex];


    if (!typingElement) {
        return;
    }


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );


        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            setTimeout(() => {

                deleting = true;

                typeRole();

            }, pauseAfterTyping);

            return;
        }


        setTimeout(
            typeRole,
            typingSpeed
        );

    }

    else {

        typingElement.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );


        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;


            roleIndex =
                (roleIndex + 1) %
                roles.length;


            setTimeout(
                typeRole,
                pauseAfterDeleting
            );

            return;
        }


        setTimeout(
            typeRole,
            deletingSpeed
        );
    }
}


if (typingElement) {
    typeRole();
}


/* =========================================
   CURRICULUM DROPDOWN
========================================= */

const curriculumDropdown =
    document.querySelector(".curriculum-dropdown");

const curriculumButton =
    document.querySelector(".curriculum-button");


if (
    curriculumDropdown &&
    curriculumButton
) {

    curriculumButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                curriculumDropdown.classList.toggle(
                    "is-open"
                );


            curriculumButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (
                !curriculumDropdown.contains(
                    event.target
                )
            ) {

                curriculumDropdown.classList.remove(
                    "is-open"
                );


                curriculumButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                curriculumDropdown.classList.remove(
                    "is-open"
                );


                curriculumButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                curriculumButton.focus();

            }

        }
    );

}