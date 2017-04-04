exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://trig:c0Ding!@ds149820.mlab.com:49820/recipe-blender';

exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test-recipes-blender');

exports.PORT = process.env.PORT || 8080;
