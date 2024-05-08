import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import { useDispatch } from 'react-redux'; 
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material'
import { setProgram } from '../../redox/createCohortData/ProgramSlice'; 
const programs = ["Product Management", "Backend", "Frontend", "DevOps", "Data Science"];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSelectedProgram(event.target.value);
    dispatch(setProgram(event.target.value)); 
  };
  console.log(selectedProgram)

  return (
    <FormControl className="pt-10">
      <p className="flex justify-start">Program</p>
      <InputLabel id="demo-simple-select-label">Select Program</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={selectedProgram}
        onChange={handleChange}
      >
        {programs.map((program) => (
          <MenuItem key={program} value={program}>
            {program}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Programs;
