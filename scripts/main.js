//opdracht 1a
const countSales = departments.sales.numberOfEmployees;
console.log("De afdeling Sales heeft " + countSales + " medewerkers.");

//opdracht 1b
console.log("Marketing is een leuke afdeling om te werken.");
console.log(departments.marketing.description);

//opdracht 1c
const countCustomerService = departments["customer-service"].numberOfEmployees;
console.log("De afdeling Customer Service heeft " + countCustomerService + " medewerkers.");

//opdracht 1d
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager.");
/*
//loop to find the requested job
for (let i = 0; i < departments.sales.jobs.length; i++) {
    if (departments.sales.jobs[i].title === "Verkoopmanager") {
        console.log(departments.sales.jobs[i].description);
        break;
    }
}
*/

//using find() to find the requested job
const found =
    departments.sales.jobs.find((element) => element.title === "Verkoopmanager");
console.log(found.description);

//opdracht 2a
let chosenDepartment =
    prompt("Over welke afdeling wil je informatie?\nKies uit: [marketing / sales / customer-service]").toLowerCase();
console.log(chosenDepartment);

//opdracht 2b
console.log("Je koos " + chosenDepartment + ".");
if (departments.hasOwnProperty(chosenDepartment)) {
    console.log(departments[chosenDepartment].description);
} else {
    //opdracht 2c
    console.log("Deze afdeling is onbekend.");
    console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
    chosenDepartment = undefined;
}

//opdracht 3a
if (chosenDepartment !== undefined) {
    let promptMsg = "Je koos " + chosenDepartment + ".\nOver welke functie wil je meer weten?\n" +
        "Voer een getal tussen 0 en " + (departments[chosenDepartment].jobs.length-1).toString() + "\n";
    for (i = 0; i < departments[chosenDepartment].jobs.length; i++) {
        promptMsg += i.toString() + ": [" + departments[chosenDepartment].jobs[i].title + "]\n";
    }
    const chosenJob = prompt(promptMsg);

    //opdracht 3b
    if (chosenJob < departments[chosenDepartment].jobs.length) {
        console.log("Je koos " + departments[chosenDepartment].jobs[chosenJob].title + "\n" +
            "Een uitdagende rol!\n" + departments[chosenDepartment].jobs[chosenJob].description);

        // opdracht 4a
        console.log(departments[chosenDepartment].title + " is een leuke afdeling om te werken.\n +" +
            "Er werken op dit moment " + departments[chosenDepartment].numberOfEmployees + " werknemers.");

        // opdracht 4b
        // al gedaan bij opdracht 3

        // opdracht 4c
        // al gedaan bij opdracht 3

        // opdracht 5a
        document.getElementById('role-title').textContent = departments[chosenDepartment].jobs[chosenJob].title;

        // opdracht 5b
        document.getElementById('department-description').textContent = departments[chosenDepartment].description;
        document.getElementById('role-description').textContent = departments[chosenDepartment].jobs[chosenJob].description;

    } else {
        document.getElementById('error-message').textContent = "Onbekende functie.";
    }
} else {
    document.getElementById('error-message').textContent = "Onbekende afdeling.";
}

// opdracht 5c i see no advantage in using literals in the above code but i know how to use them like a variable in a string using ${variable}