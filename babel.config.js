module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		],
		'@babel/preset-typescript'
	],
	plugins: [
		['module-resolver', {
			alias: {
				'@models': './src/models',
				'@controllers': './src/controllers',
				'@config': './src/config',
				'@views': './src/views'
			}
		}]
	],
	ignore: [
		'**/*.spec.ts'
	]
};
