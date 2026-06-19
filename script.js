/* =========================
ENQUIRY FORM
========================= */

const enquiryForm = document.getElementById(“enquiryForm”);

if (enquiryForm) {
enquiryForm.addEventListener(“submit”, function(event) {

    event.preventDefault();



    document.getElementById("responseMessage").innerHTML =

    "Thank you for your enquiry. We will contact you within 24 hours regarding your selected service.";



});

}

/* =========================
CONTACT FORM
========================= */

const contactForm = document.getElementById(“contactForm”);

if (contactForm) {
contactForm.addEventListener(“submit”, function(event) {

    event.preventDefault();



    document.getElementById("contactResponse").innerHTML =

    "Thank you for your message. Your message has been received successfully.";



});

}

/* =========================
SERVICE SEARCH
========================= */

const serviceSearch = document.getElementById(“serviceSearch”);

if (serviceSearch) {

serviceSearch.addEventListener("keyup", function() {



    const filter = serviceSearch.value.toLowerCase();



    const services = document.querySelectorAll(".service-item");



    services.forEach(function(service) {



        const text = service.textContent.toLowerCase();



        if (text.includes(filter)) {

            service.style.display = "block";

        } else {

            service.style.display = "none";

        }



    });



});

}

