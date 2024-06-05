import React, { useState } from 'react';
import FormControl from '@mui/joy/FormControl';
import { useDispatch } from 'react-redux'; 
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material'
const programs = ["Product", "Backend", "Frontend", "DevOps", "Product"];

const Programs = ({setProgram}) => {
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleChange = (event) => {
    setSelectedProgram(event.target.value)
  };

  return (
    <FormControl className="pt-10">
      <InputLabel  className="flex justify-start" id="demo-simple-select-label">Select Program</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        name='programDrop'
        value={selectedProgram}
        onChange={(event)=>{handleChange(event)
           setProgram(event)}}
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
