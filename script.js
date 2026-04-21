$(document).ready(function () {
    $("#characterForm").submit(function (e) {
        e.preventDefault();

        let firstName = $("#firstName").val().trim();
        let lastName = $("#lastName").val().trim();
        let email = $("#email").val().trim();
        let contact = $("#contact").val().trim();
        let character = $("#character").val().trim();
        let description = $("#description").val().trim();

        // Validation
        if (firstName === "" || lastName === "" || email === "" || contact === "" || character === "" || description === "") {
            alert("All fields are required!");
            return;
        }

        // Add new character
        $("#submitted").append(`
            <div class="info-box">
                <h3>${firstName} ${lastName}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Favourite Character:</strong> ${character}</p>
                <p>${description}</p>
            </div>
        `);

        // Clear form
        $("#firstName").val("");
        $("#lastName").val("");
        $("#email").val("");
        $("#contact").val("");
        $("#character").val("");
        $("#description").val("");
    });
});
