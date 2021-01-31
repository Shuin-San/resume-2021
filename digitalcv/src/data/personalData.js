export const career = {
	title: "Career",
	data: [
		{
			employer: "SOPRA STERIA PSF LUXEMBOURG S.A.",
			position: "REACT JS / Front End Developer",
			dateStart: "07/2019",
			dateEnd: "Current Employer",
			background: false,
			backgroundImage: "",
			location: "Luxembourg City, Luxembourg",
			toolset: [
				"ReactJS",
				"JavaScript",
				"Material UI",
				"HTML5",
				"CSS3",
				"AJAX",
				"Symfony",
				"PHP",
				"SQL",
				"PL-SQL",
				"GIT",
				"Atlassian Suite",
			],
			jobDescription: [
				"Integrated into a team of 5 developers within the European Commission institutions in Luxembourg",
				"Development of Front end interfaces for EC's custom made IT Infrastructure service request portal",
				"Creation of controllers, services and routes in Symfony Backend to plug into various Datacenter / Cloud APIs for IT Infrastructure related requests",
				"Creation of ticket status debug and workflow testing tools in PHP(Symfony) and React(UI) and took full ownership of the project",
				"Managing side projects such as the migration of various modules of the current application to React JS in collaboration with the Back-End team and the creation of internal tools with React JS and Symfony (eg permissions management tool)",
				"Release management on a weekly basis using Atlassian Bamboo using automated branch deployment scripts",
				"Actively participating into the design and creation of new services on front end level",
			],
			links: [],
		},
		{
			employer: "Imperbel SA",
			position: "Front End Engineer",
			dateStart: "10/2016",
			dateEnd: "07/2019",
			background: true,
			backgroundImage: "/assets/img/portfolio/dbg/preview.png",
			backgroundImageAlt: "Derbigum Approof",
			location: "Brussels, Belgium",
			toolset: [
				"ReactJS",
				"BootStrap",
				"CSS3",
				"HTML5",
				"JavaScript",
				"Laravel",
				"PHP",
				"SEA",
				"SEO",
				"SQL",
				"WordPress",
			],
			jobDescription: [
				"Managed the modernisation of the group's websites using WordPress and custom made front end modules in vanilla JavaScript",
				"Created online tools for waterproofing membrane installation professionals such as Approof Projects, a fully featured technical documentation generator based on users' input.",
				"Collaborated with external communication agencies to implement SEO optimization and reached 300% increase in traffic accross all pages between 2018 and 2019",
				"Managed, Designed and developed different projects for events such as Ticketing for Derbigum Classic, and created landing pages for Batibouw exposition participations to generate leads",
				"Connected web forms to Dynamics CRM for lead generation purposes",
				"Mentored and trained colleagues on the usage of the digital tools at hand by creating tutorials and presenting courses within the company",
			],
			links: [
				{
					id: 0,
					linkDesc: "Approof Projects",
					link: "https://derbigum.be/fr/approof/generateur-de-prescriptions/",
				},
				{
					id: 1,
					linkDesc: "Derbigum Classic",
					link: "https://derbigumclassic.be",
				},
			],
		},
	],
};

export const projects = {
	title: "Personal projects",
	projectList: [
		{
			id: 0,
			title: "The Weekly Dev",
			description: "yest",
			link: "https://theweeklydev.com",
		},
	],
};

export const certifications = {
	title: "Certifications",
	certList: [
		{
			id: 0,
			title: "Udacity - Front End Development Nanodegree",
			certifier: "Udacity",
			certLink: "https://confirm.udacity.com/33QDPR6A",
			certContents:
				"Exploration of JavaScript design patterns,common developer tools, testing suites, and frameworks.",
		},
	],
};

export const languages = {
	title: "Languages",
	langList: [
		{
			id: 0,
			language: "Greek",
			level: "Native speaker",
		},
		{
			id: 1,
			language: "English",
			level: "C1",
		},
		{
			id: 2,
			language: "French",
			level: "C1",
		},
		{
			id: 3,
			language: "Dutch",
			level: "A2",
		},
	],
};

export const keySkills = {
	title: "Toolbelt",
	category: [
		{
			name: "Front End",
			skills: [
				{ id: 0, skillName: "ReactJS" },
				{ id: 1, skillName: "ES6" },
				{ id: 2, skillName: "JSON" },
				{ id: 3, skillName: "JSX" },
				{ id: 4, skillName: "XML" },
				{ id: 5, skillName: "XSLT" },
				{ id: 6, skillName: "AJAX Requests" },
				{ id: 7, skillName: "Material UI" },
				{ id: 8, skillName: "Bootstrap" },
				{ id: 9, skillName: "Socket.IO" },
			],
		},
		{
			name: "Databases",
			skills: [
				{ id: 0, skillName: "MySQL" },
				{ id: 1, skillName: "PL/SQL" },
			],
		},
		{
			name: "Tools",
			skills: [
				{ id: 0, skillName: "Webstorm" },
				{ id: 1, skillName: "Visual Studio Code" },
				{ id: 2, skillName: "Atlassian Suite" },
				{ id: 3, skillName: "GIT" },
				{ id: 4, skillName: "BitBucket" },
			],
		},
		{
			name: "CMS",
			skills: [
				{ id: 0, skillName: "WordPress" },
				{ id: 1, skillName: "Ghost CMS" },
			],
		},
	],
};
