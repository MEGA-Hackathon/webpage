export type Member = {
	image: string;
	title: string;
	description: string;
};
export const members: { [key in Role]: Array<Member> } = {
	"Organization Team": [
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
	],
	"Leadership Team": [
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
	],
	"Design Team": [
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
	],
	Members: [
		{
			image: "https://avatars3.githubusercontent.com/u/12098983?s=460&v=4",
			title: "Daniel Tian",
			description:
				"Daniel Tian is a software engineer at Microsoft. He is passionate about building great software and solving challenging problems. He is also a creator of the Microsoft Visual Studio Code editor.",
		},
	],
};
export const roles = ["Organization Team", "Leadership Team", "Design Team", "Members"] as const;
export type Role = typeof roles[number];
