 // yours will be http://localhost:8080
const API = 'http://me-dev:8080'

showPeople()

async function showPeople() {
    const peopleDiv = document.getElementById('people')
    const response = await fetch(`${API}/people`)
    const peopleData = await response.json()
    peopleData.forEach(person => {
        peopleDiv.appendChild(document.createElement('hr'))
        const heading = document.createElement('h3')
        heading.append(`${person.firstname} ${person.lastname}`)
        peopleDiv.appendChild(heading);
    })
}
