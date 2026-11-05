
/* =====================================
   CITY CARE HOSPITAL
   JavaScript Functionality
===================================== */


/* =====================================
   1. MOBILE NAVBAR
===================================== */

function mobileNavbar() {

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.getElementById("navbar");

    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

        menuBtn.textContent =
            navbar.classList.contains("active") ? "✕" : "☰";

    });

    // Close menu after clicking a link

    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });

}


/* =====================================
   2. APPOINTMENT FORM
   WhatsApp Integration
===================================== */

function appointmentForm() {

    const form = document.getElementById("appointmentForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(form);

        const name = formData.get("name");
        const phone = formData.get("phone");
        const department = formData.get("department");
        const date = formData.get("date");
        const message = formData.get("message");

        if (!name || !phone || !department || !date) {

            alert("Please fill all required fields!");
            return;

        }

        const whatsappNumber = "919450463240";

        const whatsappMessage = `
Hello City Care Hospital!

Appointment Request

Name: ${name}
Phone: ${phone}
Department: ${department}
Date: ${date}
Message: ${message || "Not provided"}

Please contact me regarding my appointment.
        `;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

}


/* =====================================
   3. QR CODE GENERATOR
===================================== */

function generateHospitalQR() {

    const qrContainer = document.getElementById("qrcode");

    if (!qrContainer) return;

    const hospitalURL =
        "https://scntstsahil-git.github.io/city-care-/index.html";

    if (typeof QRCode === "undefined") {

        console.error("QRCode library is not loaded!");
        return;

    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {

        text: hospitalURL,
        width: 200,
        height: 200,
        colorDark: "#073B83",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H

    });

}


/* =====================================
   4. CURRENT YEAR
===================================== */

function updateCopyrightYear() {

    const yearElement = document.getElementById("year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }

}


/* =====================================
   5. INITIALIZE WEBSITE
===================================== */

function initializeWebsite() {

    mobileNavbar();

    appointmentForm();

    generateHospitalQR();

    updateCopyrightYear();

}


// Run all functions

document.addEventListener("DOMContentLoaded", function () {

    initializeWebsite();

});


