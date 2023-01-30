import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses }  from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { getEnumKey } from './Enums';
import Offer from './Offer';

// TODO: Move to enums.js Find out why line 98/99 doesn't work when i do that.
const ApplicantStage = Object.freeze({
    APPLIED: "Applied",
    INTERVIEWED: "Interviewed",
    OFFER: "Offered",
    ACCEPTED: "Accepted",
    REJECTED: "Rejected"
  }
);

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default class RecruiterView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            candidates : props.candidates,
            isEditing : false,
            selectedCandidate : null,
            updatedStage: ApplicantStage.APPLIED
        }
    };

    handleEdit = (candidate) => {
        this.setState({selectedCandidate: candidate, isEditing : true});
    };

    handleSave = () => {
        const salary = document.getElementById('base').value;
        const bonus = document.getElementById('bonus').value;
        const offer = new Offer({salary, bonus});
        const selectedCandidate = this.state.selectedCandidate
        selectedCandidate.handleStageChange({stage: this.state.updatedStage, offer});
        this.setState({selectedCandidate : null, isEditing : false});
    };

    handleChange = (event) => {
        this.setState({...this.state, updatedStage: event.target.value});
    }

    render = () => {
        const {selectedCandidate} = this.state;
        return (
        <>
        {
            this.state.isEditing ? 
            (
                /* Editing a candidates Application Stage and Offer*/
                <div>
                    <h3>Editing {selectedCandidate.getName()}</h3>
                    <div>
                        <Box sx={{minWidth: 120}}>
                        <InputLabel id="select-stage-label">Stage</InputLabel>
                        <Select
                            labelId="select-stage-label"
                            id="select-stage"
                            defaultValue={getEnumKey(ApplicantStage, selectedCandidate.getStage())}
                            label="Stage"
                            onChange={this.handleChange}
                        >
                            {
                                Object.keys(ApplicantStage).map(key => 
                                    <MenuItem value={key}>{ApplicantStage[key]}</MenuItem>
                                )
                            }
                        </Select>
                        </Box>
                    </div>
                    <p>Offer: </p>
                    <label htmlFor='base'>Base:</label>
                    &nbsp;
                    <input id='base' type='text' defaultValue={selectedCandidate.getOffer()?.getSalary()}></input>
                    
                    <label htmlFor='bonus'>Bonus:</label>
                    &nbsp;
                    <input id='bonus' type='text' defaultValue={selectedCandidate.getOffer()?.getBonus()}></input>
                    <p/>
                    <div><Button variant='contained' onClick={this.handleSave}>Save</Button></div>
                    
                </div>
            ) :
            ( 
                /* SHow a list of candidates the recruiter manages*/
                <> 
                <h1>Candidates</h1>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Stage</StyledTableCell>
                            <StyledTableCell align="right">Offer</StyledTableCell>
                            <StyledTableCell align="right"></StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.candidates.map((row) => (
                            <StyledTableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <StyledTableCell component="th" scope="row">
                                {row.getName()}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.getStage()}</StyledTableCell>
                            <StyledTableCell align="right">{row.getOffer()?.render()}</StyledTableCell>
                            <StyledTableCell align="right"><Button variant='contained' onClick={() => this.handleEdit(row)}>Edit</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </>
            )
        }
        </>
        
    )};
}