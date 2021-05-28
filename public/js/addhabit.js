const addNewHabitBtn = document.getElementById('add-new-habit');

addNewHabitBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    let habitnameEl = document.querySelector('#habit-name');
    let desiredfrequencyEl = document.querySelector('#desired-frequency');
    let currentfrequencyEl = document.querySelector('#current-frequency');
    // let goodhabitEl = document.querySelector('.good-habit')

    const response = await fetch('/api/habits', {
        method: 'POST',
        body: JSON.stringify({
            name: habitnameEl.value,
            // good_habit: goodhabitEl.value,
            frequency: currentfrequencyEl.value,
            target_freq: desiredfrequencyEl.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        console.log("Responses ok!")
        console.log(response)
        // document.location.replace('/addHabit');
        document.location.replace("/habits")

    } else {
        console.log(response)
        alert('Failed to add new habit');
    }

})