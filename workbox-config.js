module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,png,html,json,webmanifest}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};