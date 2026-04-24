import adapterStatic from "@sveltejs/adapter-static";

const config = {
	kit: {
		adapter: adapterStatic({ strict: false })
	}
};

export default config;
