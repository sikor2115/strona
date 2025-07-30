function sendMail() {
  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_lfgulnx", "template_ez09au9", parms)
    .then(function(response) {
      alert("Wiadomość została wysłana!");
      console.log("SUKCES", response);
    }, function(error) {
      alert("Wystąpił błąd podczas wysyłania wiadomości.");
      console.error("BŁĄD", error);
    });
}
