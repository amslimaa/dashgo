import dynamic from 'next/dynamic';
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import {Header} from '../components/Header'
import { SideBar } from '../components/SideBar'


//import Chart from 'react-apexcharts';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false} )

const options = {
  chart: {
    toolbar: { show: false },
    zoom: {
      enabled: false,
    },
    forColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-18T00:00:00.000Z',
      '2021-04-19T00:00:00.000Z',
      '2021-04-20T00:00:00.000Z',
      '2021-04-21T00:00:00.000Z',
      '2021-04-22T00:00:00.000Z',
      '2021-04-23T00:00:00.000Z',
      '2021-04-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};


const series = [
  {
    name: 'series1', 
    data: [ 34, 53, 36, 115, 64, 60, 110 ]
  },
];

export default function Dasuboard() {
  return(
    <Flex direction='column' h='100vh'>
      <Header/>

      <Flex w='100%' my='6' maxW='1480' mx='auto' px='6'>
        <SideBar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4' >
              <Text>Inscritos da semana</Text>
              <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4' >
              <Text>Taxa de abertura</Text>
              <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>

    </Flex>
  )
}