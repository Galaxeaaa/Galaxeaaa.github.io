const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	// assetPrefix: isProd ? '//' : '',
	images: {
		loader: 'akamai',
		path: '',
	}
}