import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LineChart } from '@mui/x-charts/LineChart';

const ReportsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>

      <LineChart
        xAxis={[{ data: [1, 2, 3, 4, 5] }]}
        series={[{ data: [5, 10, 15, 10, 20] }]}
        height={300}
      />
    </Box>
  );
};

export default ReportsPage;