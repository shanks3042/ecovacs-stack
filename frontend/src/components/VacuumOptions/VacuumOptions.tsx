import { Box } from '@mui/material';
import { OptionsFrame } from '../UI/OptionsFrame/OptionsFrame';
import CleanCount from './CleanCount/CleanCount';
import { VacuumSpeed } from './VacuumSpeed/VacuumSpeed';

export const VacuumOptions = () => {
  return (
    <OptionsFrame>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <VacuumSpeed />
        <CleanCount />
      </Box>
    </OptionsFrame>
  );
};

export default VacuumOptions;
