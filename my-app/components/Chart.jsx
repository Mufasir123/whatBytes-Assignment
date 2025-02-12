'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function LineChart() {

  const { data } = useSelector(state => state.data)
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 4,
      hover: {
        size: 6
      }
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      xaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['0', '25', '50', '72', '100'],
      tickAmount: 5
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const series = [
    {
      name: 'Your percentile',
      data: [20,45,60,data.percentile,90],
    }
  ];

  return (
    <div className="rounded-md flex items-center justify-around">
      <div className="w-full max-w-3xl p-4 bg-white">
        <h1 className='font-bold text-xl'>Comparison Graph</h1>
        <p className='mt-3'><span className='font-bold text-gray-700'>You scored {data.percentile}% percentile</span> which is lower than the average percentile 72% of all the engineers who took this assessment</p>
        <ApexCharts options={options} series={series} type="line" height={350} />
      </div>
    </div>
  );
}
