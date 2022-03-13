const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	// assetPrefix: isProd ? '/Galaxeaaa.github.io/' : '',
	images: {
		loader: 'akamai',
		path: '',
	}
}