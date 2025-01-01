import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import ConfigBar from './ConfigBar';
import Visualizer from './Visualizer';
import { Graph } from './Graph';
import { Solution } from './Solution';
import React from 'react';
import { StrictMode } from 'react';

function App() {
  const [graph, setGraph] = React.useState<Graph | null>(null);
  const [solution, setSolution] = React.useState<Solution | null>(null);

  const onGridChange = (graph: Graph) => {
    setGraph(graph);
  }

  const onSolutionChange = (solution: Solution) => {
    setSolution(solution);
  }

  return (
    <StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size="grow">
          <Visualizer graph={graph} solution={solution} />
        </Grid>
        <Grid size={4}>
          <ConfigBar onGraphChange={onGridChange} onSolutionChange={onSolutionChange}/>
        </Grid>
      </Grid>
    </Box>
    </StrictMode>
  );
}

export default App;
