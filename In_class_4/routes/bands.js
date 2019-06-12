const express = require('express');
const router = express.Router();
const data = require('../data');
const bandData = data.bands;

//DONT FORGET TO CHECK ALL INPUT TO MAKE SURE IT IS THERE, THAT IT IS VALID, AND PROPER TYPE
router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const band = await bandData.getBandById(req.params.id);
    res.json(band);
  } catch (e) {
    res.status(404).json({error: 'Band not found'});
  }
});

router.get('/genre/:genre', async (req, res) => {
  console.log(req.params.genre);
  //1. Todo call bandData.searchBandByGenre res.json the result.
});

router.get('/', async (req, res) => {
  try {
    const bandList = await bandData.getAllBands();
    res.json(bandList);
  } catch (e) {
    res.status(500).json({error: e});
  }
});

/*2. TODO: router.post to url '/search/bandmember'  get the req.body and then
	 1. Check the fields.  if req.body.name is present, then call bandDatasearchBandMember(req.body.name)
	 2. If the name field is not present then check if firstName and lastName are present in the body
    req.body.firstName, req.body.LastName and If so, then call bandData.searchBandMemberFullName(req.body.firstName, req.bodylastName)
    
          if (req.body.name) {
            console.log(req.body.name);
            //call bandData.searchBandMember(req.body.name)
          } else if (req.body.firstName && req.body.lastName) {
            console.log(req.body.firstName + ' ' + req.body.lastName);
            //call bandData.searchBandMemberFullName(req.body.firstName, req.bodylastName);
         }
	
	*/

/*3. TODO: router.post to url '/search/bandName' to  get the req.body and then
		let bandName = req.body.bandName
		
		bandData.searchBandByName(bandName)
	  */

/*4. TODO:
    router.post to url '/search/year' you will use this route to search by year on any of the functions,
		your body should include a field named yearRange you like, the values can be "before", "onOrBefore", "after", "onOrAfter", "exact"
		then you use an if statement to check that field, and then call the appropriate function
		like so:

		let range = req.body.yearRange

		if (range === "exact"){
			//call searchBandByYear(year)
		}else if (range === "after"){
			//call  searchBandFormedAfter(year)
		}  
		and so on..

		
		*/

/*5. TODO: router.post to url '/:id/bandmembers', get the req.body and then
		  let bandId = req.params.id
		  let firstName = req.body.firstName
		  let lastName =req.body.lastName
		  bandData.addBandMember(bandId, firstName, lastName)
		*/

/*6. TODO: router.delete to url '/:id/bandmembers' 
   get the req.body and then
			let bandId = req.params.id
			let firstName = req.body.firstName
			let lastName =req.body.lastName
			bandData.removeBandMember(bandId, firstName, lastName)
		  */

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  //7. TODO call the remove  band data function
});

module.exports = router;
