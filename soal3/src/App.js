import './App.css';
// import * as react from 'react';
import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const [nums1, setNums1] = useState([])
  const [target1, setTarget1] = useState(0)
  const [hasil1, setHasil1] = useState(null)

var twoSum = () => {
  for(let i=0;i<nums1.length-1;i++){
      for(let j=i+1;j<nums1.length;j++){
      if(nums1[i]+nums1[j] === target1)
        setHasil1(["[",[i],"]","[",[j],"]"])
      }
  }
};

  const [numm, setNumm] = useState(0)
  const [hasil, setHasil] = useState(null)

  const generate = (numm) => {
    let values = []
    for (let n = 0; n < numm; n++) {
      values[n] = [];
      values[n][0]=1;
      for (let k= 1; k < n; k ++) {    
          values[n][k ] = values[n-1][k -1]+values[n-1][k]
      }
      values[n][n] = 1;
    }
    setHasil(values);
 }

  return (
    <>
    <Grid>
      <h2>Soal No.1</h2>
      <h4>Two Sum</h4>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs="auto">
          <TextField id="outlined-basic" label="nums" variant="outlined" onInput={(e) => {setNums1(JSON.parse("[" + e.target.value + "]"))}} />
          <TextField id="outlined-basic" label="target" variant="outlined" onInput={(e) => {setTarget1(Number.parseFloat(e.target.value))}} />
          </Grid>
          <Grid item xs>
            <Button variant="contained" onClick={(e) => twoSum(nums1,target1)}>RUN</Button>
          </Grid>
          <Grid item xs={6}>
            <Item>{hasil1}</Item>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    <Grid>
      <h2>Soal No.2</h2>
      <h4>Segitiga Pascal</h4>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs="auto">
          <TextField id="outlined-basic" label="numm" variant="outlined" onInput={(e) => {setNumm(e.target.value)}} />
          </Grid>
          <Grid item xs>
          <Button variant="contained" onClick={e => generate(numm)}>RUN</Button>
          </Grid>
          <Grid item xs={6}>
          <Item>{hasil}</Item>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    </>
  );
}

export default App;
