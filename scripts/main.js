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
    }
}
*/

//using find() to find the requested job
const found =
    departments.sales.jobs.find((element) => element.title === "Verkoopmanager");
console.log(found.description);

//opdracht 2