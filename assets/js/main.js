new TradingView.widget({
    "autosize": true,
    "symbol": "XAUUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "light",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#8a2be2",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "tradingview_10328"
});


document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector('form');
    submit.addEventListener("submit", (e) => {
        e.preventDefault()
        createToDo()
        deleteTodo()
        submit.reset()
    })

    function createToDo() {
        const input = document.getElementById("messagebox");
        const input2 = document.getElementById("clientname");
        const newTask = document.createElement('li');
        const newTask2 = document.createElement('h3');


        newTask.textContent = `${input.value}       `;
        document.getElementById('commentarea').appendChild(newTask);

        newTask2.textContent = `${input2.value}       `;
        document.getElementById('commentname').appendChild(newTask2);


    }

    function deleteTodo() {
        const deleteBtn = document.createElement('button');


        deleteBtn.textContent = "X";
        newTask.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', () => newTask.remove());
        deleteBtn.addEventListener('click', () => newTask2.remove());
    }
})