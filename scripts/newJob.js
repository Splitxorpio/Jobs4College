const submitButton = document.getElementById('formSubmit');
const form = document.getElementById('newJobForm');
const textarea = document.getElementById('description');
let tag;

submitButton.addEventListener('click', () => {
    event.preventDefault();
    const inputs = Array.from(document.querySelectorAll('#newJobForm input')).reduce((acc, input) =>
        ({ ...acc, [input.id]: input.value }), {});
    if (inputs.title !== null) {
        console.log(inputs);
        insertJob(inputs);
    }
})

const compsciRadio = document.getElementById('computerscienceRadio');
const medicineRadio = document.getElementById('medicineRadio');
const lawRadio = document.getElementById('lawRadio');
const mechanicalengRadio = document.getElementById('mechanicalengineeringRadio');
const unskilledlaborRadio = document.getElementById('unskilledlaborRadio');
const financeRadio = document.getElementById('financeRadio');
const realestateRadio = document.getElementById('realestateRadio');
const constructionRadio = document.getElementById('constructionRadio');

compsciRadio.addEventListener('click', () => {
    tag = 'compsci';
})

medicineRadio.addEventListener('click', () => {
    tag = 'medical';
})

lawRadio.addEventListener('click', () => {
    tag = 'law';
})

mechanicalengRadio.addEventListener('click', () => {
    tag = 'mechanicalengineering';
})

unskilledlaborRadio.addEventListener('click', () => {
    tag = 'unskilledlabor';
})

realestateRadio.addEventListener('click', () => {
    tag = 'realestate';
})

financeRadio.addEventListener('click', () => {
    tag = 'finance';
})

constructionRadio.addEventListener('click', () => {
    tag = 'construction';
})

function insertJob(inputs) {
    const jobDiv = document.createElement('div');
    jobDiv.classList.add('container-object', 'mt-4');

    const title = document.createElement('h4');
    title.innerHTML = inputs.title;
    jobDiv.appendChild(title);

    const price = document.createElement('p');
    price.innerHTML = `Pay: $${inputs.pay} / year `;
    jobDiv.appendChild(price);

    const location = document.createElement('p');
    location.innerHTML = `Location: ${inputs.location}`;
    jobDiv.appendChild(location);

    const prereqs = document.createElement('p');
    prereqs.innerHTML = `Prereqs: ${inputs.prerequisites}`;
    jobDiv.appendChild(prereqs);

    const email = document.createElement('p');
    email.innerHTML = `Contact at: ${inputs.email}`;
    jobDiv.appendChild(email);

    const description = document.createElement('p');
    description.innerHTML = `Company info: ${textarea.value}`;
    jobDiv.appendChild(description);

    const additionalInfoLink = document.createElement('a');
    additionalInfoLink.setAttribute('href', `${inputs.additionalInfo}`);
    additionalInfoLink.innerHTML = 'View more info about job';
    console.log(additionalInfoLink);
    jobDiv.appendChild(additionalInfoLink);

    console.log(tag);
    const container = document.getElementById(`${tag}`);
    container.appendChild(jobDiv);
}