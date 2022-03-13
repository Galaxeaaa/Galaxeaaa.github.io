const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	assetPrefix: isProd ? '/galaxeaaa.github.io/' : '',
	images: {
		loader: 'akamai',
		path: '',
	}
}