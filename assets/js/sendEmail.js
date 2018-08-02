function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}


 var template_params = {
   "from_name": "from_name_value",
   "from_email": "from_email_value",
   "project_request": "project_request_value"
};

var service_id = "default_service";
var template_id = "rosie";
emailjs.send(service_id,template_id,template_params);