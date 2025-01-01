import Stack from '@mui/material/Stack';
import GraphLoader from './GraphLoader';
import SolutionLoader from './SolutionLoader';
import { Graph } from './Graph';
import { Solution } from './Solution';
import { Divider } from '@mui/material';

interface ConfigBarProps {
  onGraphChange: (graph: Graph) => void;
  onSolutionChange: (solution: Solution) => void;
}

function ConfigBar({ onGraphChange, onSolutionChange }: ConfigBarProps) {
  const repoName = "JustinShetty/mapf-visualizer";
  return (
    <Stack direction="column" spacing={2}>
      <GraphLoader onGraphChange={onGraphChange}/>
      <Divider />
      <SolutionLoader onSolutionChange={onSolutionChange}/>
      <Divider />
      <a target="_blank" href={`https://github.com/${repoName}`} style={{ color: 'white' }}>
        {repoName}
      </a>
    </Stack>
  );
}

export default ConfigBar;