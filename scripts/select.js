const select = document.getElementById('jobCategorySelect');
const compsciJobs = document.getElementById('compsci');
const medicalJobs = document.getElementById('medical');
const scienceJobs = document.getElementById('science');
const lawJobs = document.getElementById('law');
const mechanicalengineeringJobs = document.getElementById('mechanicalengineering');
const unskilledlaborJobs = document.getElementById('unskilledlabor');
const realEstateJobs = document.getElementById('realestate');
const financeJobs = document.getElementById('finance');
const electricalengineeringJobs = document.getElementById('electricalengineer');
const constructionJobs = document.getElementById('construction');
const militaryJobs = document.getElementById('military');
const insuranceJobs = document.getElementById('insurance');
const filmJobs = document.getElementById('film');


select.addEventListener('change', () => {
    const category = select.options[select.selectedIndex].text;
    filterCategories(category)
})

function filterCategories(category) {
    if (category === 'Computer Science') {
        medicalJobs.style.display = 'none';
        lawJobs.style.display = 'none';
        scienceJobs.style.display = 'none';
        mechanicalengineeringJobs.style.display = 'none';
        unskilledlaborJobs.style.display = 'none';
        realEstateJobs.style.display = 'none';
        financeJobs.style.display = 'none';
        electricalengineeringJobs.style.display = 'none';
        constructionJobs.style.display = 'none';
        militaryJobs.style.display = 'none';
        insuranceJobs.style.display = 'none';
        filmJobs.style.display = 'none';
    } else if (category === 'Medicine') {
        compsciJobs.style.display = 'none';
        lawJobs.style.display = 'none';
        scienceJobs.style.display = 'none';
        mechanicalengineeringJobs.style.display = 'none';
        unskilledlaborJobs.style.display = 'none';
        realEstateJobs.style.display = 'none';
        financeJobs.style.display = 'none';
        electricalengineeringJobs.style.display = 'none';
        constructionJobs.style.display = 'none';
        militaryJobs.style.display = 'none';
        insuranceJobs.style.display = 'none';
        filmJobs.style.display = 'none';
    } else if (category === 'law') {
        compsciJobs.style.display = 'none';
        medicalJobs.style.display = 'none';
        scienceJobs.style.display = 'none';
        mechanicalengineeringJobs.style.display = 'none';
        unskilledlaborJobs.style.display = 'none';
        realEstateJobs.style.display = 'none';
        financeJobs.style.display = 'none';
        electricalengineeringJobs.style.display = 'none';
        constructionJobs.style.display = 'none';
        militaryJobs.style.display = 'none';
        insuranceJobs.style.display = 'none';
        filmJobs.style.display = 'none';
    } else if (category === 'Science') {
        compsciJobs.style.display = 'none';
        lawJobs.style.display = 'none';
        medicalJobs.style.display = 'none';
        mechanicalengineeringJobs.style.display = 'none';
        unskilledlaborJobs.style.display = 'none';
        realEstateJobs.style.display = 'none';
        financeJobs.style.display = 'none';
        electricalengineeringJobs.style.display = 'none';
        constructionJobs.style.display = 'none';
        militaryJobs.style.display = 'none';
        insuranceJobs.style.display = 'none';
        filmJobs.style.display = 'none';
    } else if (category === 'Mechanical Engineering') {
        compsciJobs.style.display = 'none';
        lawJobs.style.display = 'none';
        medicalJobs.style.display = 'none';
        scienceJobs.style.display = 'none';
        unskilledlaborJobs.style.display = 'none';
        realEstateJobs.style.display = 'none';
        financeJobs.style.display = 'none';
        electricalengineeringJobs.style.display = 'none';
        constructionJobs.style.display = 'none';
        militaryJobs.style.display = 'none';
        insuranceJobs.style.display = 'none';
        filmJobs.style.display = 'none';
    }
}