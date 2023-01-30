import * as React from 'react';

export default class Offer extends React.Component {
    constructor(props) {
        super(props);
        const {salary, bonus} = props;
        this.state = {
            salary: salary,
            bonus: bonus
        };
    }

    getSalary() {return this.state.salary;}
    setSalary(value) { this.setState({...this.state, salary: value});}
    
    getBonus() {return this.state.bonus;}
    setBonus(value) { this.setState({...this.state, bonus: value});}

    render = () => {
        const {salary, bonus} = this.state;
        return(
            <div>
                <span>Base: ${salary}</span>
                &nbsp;
                <span>Bonus: ${bonus}</span>
            </div>
        );
    }
}