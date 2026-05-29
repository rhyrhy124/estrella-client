import { useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';

import { DataGrid } from '@mui/x-data-grid';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
  },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
  },
  {
    field: 'age',
    headerName: 'Age',
    width: 100,
  },
];

const rows = [
  {
    id: 1,
    firstName: 'Jon',
    lastName: 'Snow',
    age: 14,
  },
  {
    id: 2,
    firstName: 'Cersei',
    lastName: 'Lannister',
    age: 31,
  },
  {
    id: 3,
    firstName: 'Jaime',
    lastName: 'Lannister',
    age: 31,
  },
  {
    id: 4,
    firstName: 'Arya',
    lastName: 'Stark',
    age: 11,
  },
  {
    id: 5,
    firstName: 'Daenerys',
    lastName: 'Targaryen',
    age: 30,
  },
];

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = async () => {
    const input = printRef.current;

    if (!input) return;

    const canvas = await html2canvas(input, {
      scale: 2,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.setFontSize(20);

    pdf.text('Reports Summary', 15, 20);

    pdf.setFontSize(11);

    pdf.text(
      'Analytics overview for generated reports.',
      15,
      30
    );

    pdf.addImage(
      imgData,
      'PNG',
      10,
      40,
      pdfWidth - 20,
      pdfHeight
    );

    pdf.save('reports-summary.pdf');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <Box>
          <Typography
            variant="h4"
            gutterBottom
          >
            Reports
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            Analytics overview showing
            generated reports.
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
        >
          <Button variant="contained">
            Generate
          </Button>

          <Button
            variant="outlined"
            onClick={handlePrint}
          >
            Export PDF
          </Button>

          <Button variant="outlined">
            Filter
          </Button>
        </Stack>
      </Stack>

      <Stack
        ref={printRef}
        spacing={3}
      >
        <Card>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
            >
              Monthly Report Output
            </Typography>

            <BarChart
              height={300}
              xAxis={[
                {
                  data: [
                    'January',
                    'February',
                    'March',
                    'April',
                  ],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [12, 18, 15, 22],
                  label: 'Reports',
                },
              ]}
            />
          </CardContent>
        </Card>

        <Stack
          direction={{
            xs: 'column',
            lg: 'row',
          }}
          spacing={3}
        >
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
              >
                Report Category Share
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent:
                    'center',
                }}
              >
                <PieChart
                  series={[
                    {
                      data: [
                        {
                          id: 0,
                          value: 14,
                          label: 'Sales',
                        },
                        {
                          id: 1,
                          value: 10,
                          label:
                            'Marketing',
                        },
                        {
                          id: 2,
                          value: 8,
                          label:
                            'Inventory',
                        },
                        {
                          id: 3,
                          value: 6,
                          label:
                            'Finance',
                        },
                      ],
                    },
                  ]}
                  width={280}
                  height={220}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
              >
                Completion Rate
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent:
                    'center',
                }}
              >
                <Gauge
                  width={180}
                  height={180}
                  value={78}
                />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
            >
              Reports Table
            </Typography>

            <Box sx={{ height: 350 }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5]}
                initialState={{
                  pagination: {
                    paginationModel: {
                      page: 0,
                      pageSize: 5,
                    },
                  },
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;