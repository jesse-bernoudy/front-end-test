import * as React from 'react';
import ApplicantStage from './Enums';

export default class Candidate extends React.Component {
  constructor(props) {
    super(props);
    const {name, stage, offer} = props;
    this.state = {
        id: Math.random() * 100,
        name,
        stage: stage ?? ApplicantStage.APPLIED,
        offer
    };
  };


  getId() {
    return this.state.id;
  };

  setName(value) {
    this.setState({name:value});
  }
  getName() {
    return this.state.name;
  };

  setStage(value) {
    this.setState({stage:value});
  }
  getStage() {
    return this.state.stage;
  };

  setOffer(value) {
    this.setState({offer:value});
  }
  getOffer() {
    return this.state.offer;
  };

  handleStageChange = (props) => {
    const {stage, offer} = props;
    this.setStage(stage);
    this.setOffer(offer);
  };
}