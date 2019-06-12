const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const bands = data.bands;

const main = async () => {
  const db = await dbConnection();
  await db.dropDatabase();

  const pinkFloyd = await bands.addBand(
    'Pink Floyd',
    [
      {firstName: 'Roger', lastName: 'Waters'},
      {firstName: 'David', lastName: 'Gilmour'},
      {firstName: 'Nick', lastName: 'Mason'},
      {firstName: 'Richard', lastName: 'Wright'},
      {firstName: 'Syd', lastName: 'Barrett'}
    ],
    1965,
    ['Progressive Rock', 'Psychedelic rock', 'Classic Rock'],
    'EMI'
  );

  const theDoors = await bands.addBand(
    'The Doors',
    [
      {firstName: 'Jim', lastName: 'Morrison'},
      {firstName: 'Ray', lastName: 'Manzarek'},
      {firstName: 'Robby', lastName: 'Krieger'},
      {firstName: 'John', lastName: 'Densmore'}
    ],
    1965,
    ['Blues Rock', 'Psychedelic rock', 'Acid Rock'],
    'Elektra'
  );

  const motleycrue = await bands.addBand(
    'Motley Crue',
    [
      {firstName: 'Nikki', lastName: 'Sixx'},
      {firstName: 'Vince', lastName: 'Neil'},
      {firstName: 'Tommy', lastName: 'Lee'},
      {firstName: 'Mick', lastName: 'Mars'}
    ],
    1981,
    ['Rock', 'Hard Rock', 'Hair Metal'],
    'Elektra'
  );

  const rollingstones = await bands.addBand(
    'The Rolling Stones',
    [
      {firstName: 'Mick', lastName: 'Jagger'},
      {firstName: 'Keith', lastName: 'Richards'},
      {firstName: 'Ronnie', lastName: 'Wood'},
      {firstName: 'Charlie', lastName: 'Watts'},
      {firstName: 'Bill', lastName: 'Wyman'}
    ],
    1962,
    ['Rock', 'Blues', 'Classic Rock'],
    'Atlantic'
  );

  const pink = await bands.addBand(
    'Pink',
    [{firstName: 'Alecia', lastName: 'Moore'}],
    2000,
    ['Pop', 'Rock', 'R&B'],
    'RCA'
  );
  console.log('Done seeding database');
  await db.serverConfig.close();
};

main().catch(console.log);
