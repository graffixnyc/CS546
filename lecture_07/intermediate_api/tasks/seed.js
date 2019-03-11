const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const users = data.users;
const posts = data.posts;

async function main() {
	const db = await dbConnection();
	await db.dropDatabase();
	const patrick = await users.addUser('Patrick', 'Hill');
	const phil = await users.addUser('Phil', 'Barresi');
	const phil_id = phil._id;
	const patrick_id = patrick._id;

	await posts.addPost('Hello, class!', 'Today we are creating a blog!', [], phil_id);
	await posts.addPost(
		'Using the seed',
		'We use the seed to have some initial data so we can just focus on servers this week',
		[],
		phil_id
	);
	await posts.addPost("Patrick's First Post", 'Today we are creating a blog!', [], patrick_id);
	await posts.addPost("Patrick's Second Post", 'Today we are creating a blog!', [], patrick_id);
	await posts.addPost('Using routes', 'The purpose of today is to simply look at some GET routes', [], phil_id);
	console.log('Done seeding database');
	await db.close();
}

main();
