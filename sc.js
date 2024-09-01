function sendDetails() {
    const email = prompt("Enter email:");
    if (email) {
        const busCount = document.getElementById("busCount").value;
        let busDetails = "";
        let allFieldsFilled = true; // Flag to check if all fields are filled

        for (let i = 0; i < busCount; i++) {
            const busNo = document.getElementById(`busNo${i}`).value.trim();
            const driverName = document.getElementById(`driverName${i}`).value.trim();
            const startTime = document.getElementById(`startTime${i}`).value.trim();
            const highPublicPlace = document.querySelector('input[name="highPublicPlace"]:checked');

            if (!busNo || !driverName || !startTime || !highPublicPlace) {
                allFieldsFilled = false;
                break;
            }

            busDetails += `
Bus ${i + 1} Details:
Bus No: ${busNo}
Driver Name: ${driverName}
Start Time: ${startTime}
Today's Routes: ${highPublicPlace.value} and 3 random routes
\n\n`;
        }

        if (!allFieldsFilled) {
            alert("All fields are required. Please fill out all details before proceeding.");
            return;
        }

        const mailtoLink = `mailto:${email}?subject=Bus Details&body=${encodeURIComponent(busDetails)}`;
        window.location.href = mailtoLink;

        alert("Details shared with crew members successfully");

        // Refresh the page after the alert is dismissed
        location.reload();
    }
}
