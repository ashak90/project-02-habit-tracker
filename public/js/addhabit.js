const addNewHabitBtn = document.getElementById('add-new-habit');

addNewHabitBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    const name = document.querySelector('#habit-name').value;
    const target_freq = document.querySelector('#desired-frequency').value;
    const frequency = document.querySelector('#current-frequency').value;
    const good_habit = document.querySelector('#good-habit').checked;

    const res = await fetch('/api/habits', {
        method: 'POST',
        body: JSON.stringify({
            name,
            good_habit,
            frequency,
            target_freq,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    res.ok ? document.location.replace('/habits') : alert(res.statusText);
})