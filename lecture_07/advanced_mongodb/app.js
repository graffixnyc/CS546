const advMongo = require('./advMongo');

async function main() {
	// const cn = await advMongo.findByDirector('Christopher Nolan');
	// console.log(cn);

	// const before2015 = await advMongo.findMoviesReleasedOnOrBefore(2014);
	// console.log(before2015);

	// const rating = await advMongo.findByRatings([ 3.2, 5, 4.5 ]);
	// console.log(rating);
	const updatedTitle = await advMongo.updateTitle(1, 'Inception');
	console.log(updatedTitle);

	console.log('done');
}

main();
