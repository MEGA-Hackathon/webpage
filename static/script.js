const members = document.querySelector("#members");
fetch("./static/team.json")
    .then(response => response.json())
    .then(data => data.forEach(e => {
        img = e.hasOwnProperty("image") ? `<img src="${e["image"]}" />` : ``
        members.innerHTML += `
        <li>
            ${img}
            <p>
                <b>${e["name"]}</b>
                <br />
                ${e["bio"]}
            </p>
        </li>
        `
    }))