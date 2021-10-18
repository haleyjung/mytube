let videos = [
	{
		title: "First Video",
		ratings: 5,
		comemnts: 2,
		createdAt: "2 minutes ago",
		views: 1,
		id: 1,
	},
	{
		title: "Second Video",
		ratings: 5,
		comemnts: 2,
		createdAt: "2 minutes ago",
		views: 61,
		id: 2,
	},
	{
		title: "Third Video",
		ratings: 5,
		comemnts: 2,
		createdAt: "2 minutes ago",
		views: 61,
		id: 3,
	},
];

export const trending = (req, res) => {
	return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const getEdit = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	videos[id - 1].title = title;
	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
	const { title } = req.body;
	const newVideo = {
		title,
		ratings: 0,
		comemnts: 0,
		createdAt: "just now",
		views: 0,
		id: videos.length + 1,
	};
	videos.push(newVideo);
	return res.redirect("/");
};

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
