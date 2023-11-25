
document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate role based on experience
    function getRole(experience) {
        if (experience > 5) {
            return "Senior";
        } else if (experience >= 2 && experience <= 5) {
            return "Junior";
        } else {
            return "Trainee";
        }
    }

    // Function to append row to the table
    function appendRow(name, doctorId, specialization, experience, email, mobile) {
        var tableBody = document.querySelector("tbody");

        var newRow = tableBody.insertRow();
        var cells = [];

        for (var i = 0; i < 8; i++) {
            cells[i] = newRow.insertCell(i);
        }

        cells[0].textContent = name;
        cells[1].textContent = doctorId;
        cells[2].textContent = specialization;
        cells[3].textContent = experience;
        cells[4].textContent = email;
        cells[5].textContent = mobile;
        cells[6].textContent = getRole(experience);
        cells[7].innerHTML = '<span class="delete-btn" onclick="deleteRow(this)">Delete</span>';
    }

    // Function to handle form submission
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var doctorId = document.getElementById("doctor_id").value;
        var specialization = document.getElementById("specialization").value;
        var experience = document.getElementById("experience").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mobile").value;

        appendRow(name, doctorId, specialization, experience, email, mobile);

        // Reset the form after submission
        event.target.reset();
    });

    // Function to delete a row
    window.deleteRow = function (btn) {
        var row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };

    // Function to filter table based on specialization
    document.getElementById("filter").addEventListener("change", function () {
        var filterValue = this.value.toLowerCase();
        var rows = document.querySelectorAll("tbody tr");

        rows.forEach(function (row) {
            var specialization = row.cells[2].textContent.toLowerCase();

            if (filterValue === "" || specialization === filterValue) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });
});

