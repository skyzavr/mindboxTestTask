import { Box } from '@mui/material';
import { FilterByColor } from '@features/filterByColor';
import { FilterByType } from '@features/filterByTaskType';
export const Filter = () => {
  return (
    <Box>
      <FilterByType />
      <FilterByColor />
    </Box>
  );
};
