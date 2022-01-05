const members = document.querySelector("#members");
fetch("./static/team.json")
    .then(response => response.json())
    .then(data => data.forEach(e => {
        members.innerHTML += `
        <li>
            <img src="${e["image"]}" />
            <p>
                <b>${e["name"]}</b>
                <br />
                ${e["bio"]}
            </p>
        </li>
        `
    }))