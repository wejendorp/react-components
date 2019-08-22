module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false
			}
		],
		'@babel/preset-react'
	],
	plugins: ['lodash'],
	env: {
		test: {
			presets: [
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'usage',
						corejs: 3
					}
				],
				'@babel/preset-react',
				'@babel/preset-typescript'
			],
			plugins: [
				'@babel/plugin-proposal-class-properties',
				'@babel/plugin-proposal-object-rest-spread'
			]
		}
	}
};