from jinja2 import Environment, PackageLoader, select_autoescape
import json

env = Environment(
    loader=PackageLoader("mega"),
    autoescape=select_autoescape()
)

if __name__ == "__main__":
    template = env.get_template("index.html.jinja")
    with open("./static/team.json") as team:
        team = json.load(team)
        html = template.render(team=team)
        with open("index.html", "w") as index:
            index.write(html)