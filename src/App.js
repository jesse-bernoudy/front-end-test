import * as React from 'react';
import Candidate from './Candidate';
import RecruiterView from './RecruiterView';
import ApplicantStage from './Enums';
import Offer from './Offer';

const offer = new Offer({salary: 100000, bonus: 10000});

// TODO: Get data from API Endpoint.
const rows = [
  new Candidate({name:'Joe Smith', stage:ApplicantStage.APPLIED, offer:null}),
  new Candidate({name:'Dave K', stage:ApplicantStage.APPLIED, offer:null}),
  new Candidate({name:'Alan H', stage:ApplicantStage.INTERVIEWED, offer:null}),
  new Candidate({name:'Brendan M', stage:ApplicantStage.OFFER, offer}),
];
const App = () => {
  // ToDo add start screen and login screen.
  return <RecruiterView candidates={rows} />
}
export default App;