// typing text animation script
var typed = new Typed(".typing", {
    strings: [" ","JAVA FULL STACK Developer", "Web Designer", "Student", "Programmer"],
    typeSpeed: 100,
    backSpeed: 65,
    loop: true
});

var typed = new Typed(".typing-1", {
    strings: ["","JAVA FULL STACK", " Developer", "Web Designer", "Student", "Programmer"],
    typeSpeed: 100,
    backSpeed: 65,
    loop: true
});



//  ARROW SCROLL TO UP
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset+height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //    STICKY NAVBAR

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


};
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !mobile || !subject || !message) {
      alert('Please fill in all fields!');
      return;
    }

    // Simulate message sending (for demo purposes)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Optionally, clear the form
    document.getElementById('contact-form').reset();
  });




//       SCROLL REVEAL

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header', {origin: 'top'});
ScrollReveal().reveal('.main-content, .profile-img, .media-body, .my-skill-card, .my-skills, .skills, .projects, .contact, form', {origin: 'bottom'});

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from submitting normally

  emailjs.send("sanjaykumarbijjam02@gmail.com", " ", {
    fullname: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  })
  .then(function(response) {
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("Failed to send message. Please try again later.");
    console.error("Error:", error);
  });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Convert to Excel row format
    const data = [
        ["Full Name", "Email", "Mobile", "Subject", "Message"],
        [fullname, email, mobile, subject, message]
    ];

    // Create worksheet & workbook
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contact Data");

    // Download as Excel file
    XLSX.writeFile(wb, "Contact_Form_Data.xlsx");

    alert("Excel file downloaded successfully!");
});


