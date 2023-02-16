const eventsElement = document.getElementById("events");

fetch("/event")
  .then(response => response.json())
  .then(events => {
    eventsElement.innerHTML = events
      .map(event => {
        return `
          <div class="event">
            <h2 class="event__name">${event.name}</h2>
            <p class="event__date">${event.date} @ ${event.time}</p>
            <p class="event__description">${event.description}</p>
          </div>
        `;
      })
      .join("");
  });