function showBusDetails() {
    const busCount = document.getElementById('busCount').value;
    if (busCount > 0) {
        document.getElementById('busCountSection').style.display = 'none';
        const container = document.getElementById('busDetailsContainer');
        container.innerHTML = '';
        for (let i = 1; i <= busCount; i++) {
            container.innerHTML += `
                <div>
                    <label>Bus No ${i}:</label>
                    <input type="text" placeholder="Bus No">
                    <input type="text" placeholder="Driver Name">
                    <input type="time" placeholder="Start Point Time">
                </div>
            `;
        }
        document.getElementById('busDetailsSection').style.display = 'block';
    }
}

function showRouteSelection() {
    document.getElementById('busDetailsSection').style.display = 'none';
    document.getElementById('routeSelectionSection').style.display = 'block';
}

function showRouteAssignment() {
    const selectedRoutes = [];
    document.querySelectorAll('#routeSelectionSection input[type="checkbox"]:checked').forEach(checkbox => {
        selectedRoutes.push(checkbox.value);
    });

    if (selectedRoutes.length > 0) {
        document.getElementById('routeSelectionSection').style.display = 'none';
        const container = document.getElementById('routeAssignmentContainer');
        container.innerHTML = '';
        selectedRoutes.forEach(route => {
            container.innerHTML += `
                <div>
                    <label>${route}:</label>
                    <select>
                        <option value="high">High Public Place</option>
                        <option value="normal">Normal</option>
                    </select>
                </div>
            `;
        });
        document.getElementById('routeAssignmentSection').style.display = 'block';
    }
}

function showEmailInput() {
    document.getElementById('routeAssignmentSection').style.display = 'none';
    document.getElementById('emailInputSection').style.display = 'block';
}

function sendDetails() {
    const email = document.getElementById('driverEmail').value;
    if (email) {
        document.getElementById('emailInputSection').style.display = 'none';
        document.getElementById('confirmationSection').style.display = 'block';
    }
}
