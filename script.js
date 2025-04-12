document.addEventListener("DOMContentLoaded", function() {
    const loading = document.getElementById("loading");
    const app = document.getElementById("app");
    const searchInput = document.getElementById("search");
    const carList = document.getElementById("car-list");

    setTimeout(() => {
        loading.style.display = "none";
        app.style.display = "block";
    }, 1500);

    const cars = [
        { model: "Volkswagen Golf 5", issues: ["Probleme la EGR", "Ambreiaj uzat", "Probleme la închidere centralizată"] },
        { model: "BMW E46", issues: ["Senzor ABS defect", "Pompa de apă cedează", "Rugină la aripi"] },
        { model: "Dacia Logan 1.4", issues: ["Bielete direcție slăbite", "Probleme electrice", "Consum ridicat de ulei"] },
        { model: "Ford Focus 2", issues: ["Injectoare defecte", "Probleme la DPF", "Bucșe basculă uzate"] }
    ];

    function displayCars(filter = "") {
        carList.innerHTML = "";
        cars.filter(car => car.model.toLowerCase().includes(filter.toLowerCase()))
            .forEach(car => {
                const div = document.createElement("div");
                div.className = "car";
                div.innerHTML = `<h3>${car.model}</h3><ul>${car.issues.map(issue => `<li>${issue}</li>`).join("")}</ul>`;
                carList.appendChild(div);
            });
    }

    searchInput.addEventListener("input", e => displayCars(e.target.value));
    displayCars();
});