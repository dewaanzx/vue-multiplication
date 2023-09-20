module.exports = {
	chainWebpack: (config) => {
	  // Menambahkan aturan pemrosesan file SVG
	  config.module
		.rule('svg')
		.test(/\.svg$/)
		.use('file-loader')
		.loader('file-loader')
		.options({
		  name: 'assets/[name].[hash:8].[ext]',
		});
	},
  };
  