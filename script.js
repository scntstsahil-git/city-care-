
/* MOBILE MENU */
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

document.getElementById("menuBtn").addEventListener("click", toggleMenu);


/* CLOSE MENU AFTER CLICK */
document.querySelectorAll("#navbar a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navbar").classList.remove("active");
    });
});


/* APPOINTMENT FORM */
function handleAppointment(event) {
    event.preventDefault();

    const name = document.getElementById("patientName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;

    const message = document.getElementById("formMessage");

    if (!name || !phone || !department || !date) {
        message.textContent = "Please fill all required fields.";
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        message.textContent = "Enter a valid 10-digit phone number.";
        return;
    }

    message.textContent =
        "Demo request received! Connect a backend to confirm appointments.";

    document.getElementById("appointmentForm").reset();
}

document.getElementById("appointmentForm")
    .addEventListener("submit", handleAppointment);


/* QR CODE GENERATOR */
function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");

    // Replace with your actual published website URL.
    const websiteURL = "https://example.com";

    if (typeof QRCode !== "undefined") {
        new QRCode(qrContainer, {
            text: websiteURL,
            width: 180,
            height: 180,
            colorDark: "#073b82",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    } else {
        qrContainer.textContent = "QR library could not load.";
    }
}

generateQRCode();


/* SET MINIMUM APPOINTMENT DATE */
function setMinimumDate() {
    const dateInput = document.getElementById("date");

    const today = new Date();
    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    dateInput.min = localDate;
}

setMinimumDate();


