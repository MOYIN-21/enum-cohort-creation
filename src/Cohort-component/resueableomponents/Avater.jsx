import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import c1 from '../../assets/C1.png'
import c2 from '../../assets/C2.png'
import c3 from '../../assets/C3.png'
import c4 from '../../assets/C4.png'
import c5 from '../../assets/C5.png'
import { useSelector } from 'react-redux';

const cohortImages = [
  <Stack direction="row" spacing={2}>
    <Avatar alt="Remy Sharp" src={c1}/>
    <Avatar alt="Travis Howard" src={c2} />
    <Avatar alt="Cindy Baker" src={c3} />
    <Avatar alt="Cindy Baker" src={c4} />
    <Avatar alt="Cindy Baker" src={c5} />
  </Stack>

];

const cohorts = [
  {
    id: 1,
    picture: cohortImages[0],
    cohortName: 'Cohort 1',
    learners: 25,
    dateCreated: '2024-05-10',
  },
  {
    id: 2,
    picture: cohortImages[1],
    cohortName: 'Cohort 2',
    learners: 30,
    dateCreated: '2024-05-13', 
  },
  {
    id: 3,
    picture: cohortImages[2],
    cohortName: 'Cohort 3',
    learners: 62,
    dateCreated: '2024-05-08',
  },
  {
    id: 4,
    picture: cohortImages[3],
    cohortName: 'Cohort 4',
    learners: 30,
    dateCreated: '2024-05-08',
  },
  {
    id: 5,
    picture: cohortImages[5],
    cohortName: 'Cohort 5',
    learners: 24,
    dateCreated: '2024-05-08',
  },
];

const CohortCard = ({}) => {
  const cohorts = useSelector((state)=> state.program.cohortsData)

  return (
    <div className='flex flex-row justify-between'> 
      <div key={cohorts.id} className="">
        <img src={cohorts.uploadImage} alt={cohorts.cohortName} />
        <h3>{cohorts.cohortName}</h3>
        <p>Learners: {cohorts.learners}</p>
      </div>
      <div>
        <p>Date Created: {cohorts.dateCreated}</p>
      </div>
    </div>
  );
};

const Avater = () => {
  const [slicedCohorts, setSlicedCohorts] = useState(cohorts.slice(0, 3)); 

  const handleShowMore = () => {
    setSlicedCohorts();
  };

  return (
    <div className="cohort-list">
      {slicedCohorts.map((cohorts) => (
        <CohortCard key={cohorts.id} cohort={cohorts} />
      ))}
      {/* {slicedCohorts.length < cohorts.length && (
        <button onClick={}>Show More</button>
      )} */}
    </div>
  );
};

export default Avater;



// import React from 'react'

// const Avater = () => {
//   return (
//     <div>Avater</div>
//   )
// }

// export default Avater