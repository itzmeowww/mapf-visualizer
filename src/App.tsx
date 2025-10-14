import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ConfigBar from './ConfigBar';
import Visualizer from './Visualizer';
import { Graph } from './Graph';
import { Solution } from './Solution';
import React, { useCallback } from 'react';
import { StrictMode, useRef } from 'react';

function App() {
  const pixiAppRef = useRef<{
    skipBackward?: () => void;
    skipForward?: () => void;
    restart?: () => void;
    fit?: () => void;
    takeScreenshot?: () => void;
  }>(null);

  const [graph, setGraph] = React.useState<Graph | null>(null);
  const [solution, setSolution] = React.useState<Solution | null>(null);
  const [playAnimation, setPlayAnimation] = React.useState<boolean>(true);
  const [stepSize, setStepSize] = React.useState<number>(1.0);
  const [loopAnimation, setLoopAnimation] = React.useState<boolean>(true);
  const [showAgentId, setShowAgentId] = React.useState<boolean>(false);
  const [tracePaths, setTracePaths] = React.useState<boolean>(true);
  const [canScreenshot, setCanScreenshot] = React.useState<boolean>(true);
  const [showCellId, setShowCellId] = React.useState<boolean>(false);
  const [showGoals, setShowGoals] = React.useState<boolean>(true);
  const [showGoalVectors, setShowGoalVectors] = React.useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);

  const handleSkipBackward = () => {
    if (pixiAppRef.current?.skipBackward) {
      pixiAppRef.current.skipBackward();
    }
  }

  const handleSkipForward = () => {
    if (pixiAppRef.current?.skipForward) {
      pixiAppRef.current.skipForward();
    }
  }

  const handleRestart = () => {
    if (pixiAppRef.current?.restart) {
      pixiAppRef.current.restart();
    }
  }

  const handleFitView = () => {
    if (pixiAppRef.current?.fit) {
      pixiAppRef.current.fit();
    }
  }

  const handleTakeScreenshot = () => {
    if (pixiAppRef.current?.takeScreenshot) {
      pixiAppRef.current.takeScreenshot();
    }
  }

  return (
    <StrictMode>
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <IconButton
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          zIndex: 1000,
          backgroundColor: 'background.paper',
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        <MenuIcon />
      </IconButton>
      <Stack sx={{ height: '100vh' }}>
        <Visualizer
          pixiAppRef = {pixiAppRef}
          graph={graph}
          solution={solution}
          playAnimation={playAnimation}
          stepSize={stepSize}
          loopAnimation={loopAnimation}
          showAgentId={showAgentId}
          tracePaths={tracePaths}
          setCanScreenshot={setCanScreenshot}
          showCellId={showCellId}
          showGoals={showGoals}
          showGoalVectors={showGoalVectors}
        />
      </Stack>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        keepMounted
        sx={{
          '& .MuiDrawer-paper': {
            width: 400,
          },
        }}
      >
        <ConfigBar
          graph={graph}
          onGraphChange={useCallback((graph: Graph | null) => setGraph(graph), [])}
          onSolutionChange={useCallback((solution: Solution | null) => setSolution(solution), [])}
          playAnimation={playAnimation}
          onPlayAnimationChange={setPlayAnimation}
          onSkipBackward={handleSkipBackward}
          onSkipForward={handleSkipForward}
          onRestart={handleRestart}
          stepSize={stepSize}
          onStepSizeChange={setStepSize}
          loopAnimation={loopAnimation}
          onLoopAnimationChange={setLoopAnimation}
          onFitView={handleFitView}
          showAgentId={showAgentId}
          onShowAgentIdChange={setShowAgentId}
          tracePaths={tracePaths}
          onTracePathsChange={setTracePaths}
          canScreenshot={canScreenshot}
          takeScreenshot={handleTakeScreenshot}
          showCellId={showCellId}
          setShowCellId={setShowCellId}
          showGoals={showGoals}
          setShowGoals={setShowGoals}
          showGoalVectors={showGoalVectors}
          setShowGoalVectors={setShowGoalVectors}
        />
      </Drawer>
    </Box>
    </StrictMode>
  );
}

export default App;
