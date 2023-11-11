
    function studentdata() {
        let data = [
            document.getElementById('sname').value,
            document.getElementById('fname').value,
            document.getElementById('sid').value,
            document.getElementById('batch').value,
            document.getElementById('marks').value
        ];

        document.getElementById('rows').innerHTML +=
            "<tr>" +
            "<td>" + data[0] + "</td>" +
            "<td>" + data[1] + "</td>" +
            "<td>" + data[2] + "</td>" +
            "<td>" + data[3] + "</td>" +
            "<td>" + data[4] + "</td>" +
            "<td><button onclick='deletedata(this)'>Delete</button></td>" +
            "</tr>";

        // Clear input fields
        document.getElementById('sname').value = "";
        document.getElementById('fname').value = "";
        document.getElementById('sid').value = "";
        document.getElementById('batch').value = "";
        document.getElementById('marks').value = "";
    }

    
    function deletedata(button) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }

