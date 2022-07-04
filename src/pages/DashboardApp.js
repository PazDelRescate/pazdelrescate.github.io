import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import { Link  } from 'react-router-dom';
// components
import Page from '../components/Page';
// sections
import {
  AppTasks,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Analysis Reports
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Link style={{textDecoration: 'none'}} to={'/daily'}>
            <AppWidgetSummary title="Daily Analysis" date='07/04/2022' total={0} icon={'bi:graph-up-arrow'} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link style={{textDecoration: 'none'}} to={'/monthly'}>
            <AppWidgetSummary title="Monthly FSO2/VA" date='July 2022' total={0} color="warning" icon={'bi:graph-up-arrow'} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link style={{textDecoration: 'none'}} to={'/brixtemps'}>
            <AppWidgetSummary title="Brix and Temps" date='Harvest 2022' total={0} color="error" icon={'bi:graph-up-arrow'} />
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link style={{textDecoration: 'none'}} to={'/vineyard'}>
            <AppWidgetSummary title="Vineyard Reports" date='Harvest 2022' color="info" icon={'bi:graph-up-arrow'} />
            </Link>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Vineyard Ripening"
              subheader="Rhymefarm Vineyard"
              chartLabels={[
                '08/25/2022',
                '09/01/2022',
                '09/04/2022',
                '09/07/2022',
                '09/10/2022',
                '09/12/2022',
                '09/17/2022',
                '09/20/2022',
                '09/22/2022',
                '09/23/2022',
                '09/25/2022',
              ]}
              chartData={[
                {
                  name: 'Cabernet Sauvignon',
                  type: 'column',
                  fill: 'solid',
                  data: [2, 6, 9, 12, 13, 16, 18, 19, 23, 24, 26],
                },
                {
                  name: 'Chardonnay',
                  type: 'area',
                  fill: 'gradient',
                  data: [5, 11, 12, 13, 14, 18, 19, 20, 21, 22, 25],
                },
                {
                  name: 'Merlot',
                  type: 'line',
                  fill: 'solid',
                  data: [3, 7, 14, 16, 18, 20, 21, 22, 23, 24, 25],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current State of Wine"
              chartData={[
                { label: 'Fermenting', value: 4344 },
                { label: 'Secondary', value: 5435 },
                { label: 'Sulfured', value: 1443 },
                { label: 'Bottle Ready', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Analysis Today"
              list={[...Array(4)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'GB/AP Free sulfurs',
                  'Bottling Line QC',
                  'Acid Trials for 21GBCS',
                  'Enzymatics',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Daily Tasks"
              list={[
                { id: '1', label: 'Calibrate Instruments' },
                { id: '2', label: 'Data Entry' },
                { id: '3', label: 'Run Tests' },
                { id: '4', label: 'Update Vintrace' },
                { id: '5', label: 'Clean Laboratory' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
