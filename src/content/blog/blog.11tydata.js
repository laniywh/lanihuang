export default {
	tags: ["posts"],
	layout: "layouts/post.njk",
	eleventyComputed: {
		permalink: "/blog/{{ title | slugify }}/index.html",
	},
};
