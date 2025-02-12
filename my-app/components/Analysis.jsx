'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function SyllabusWiseAnalysis() {
  const {data} = useSelector(state => state.data)

  const questionPercentage = (data.currentScore / 15) * 100;

  const options = {
    chart: {
      type: 'donut',
      background: 'transparent',
    },
    labels: ['Correct', 'Remaining'],
    colors: ['#4285F4', '#E8EAF6'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      type: 'solid',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    tooltip: {
      enabled: true,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
  };

  return (
    <div className='mt-16'>
      <div className="border rounded-lg p-6 bg-white shadow-sm ">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">Syllabus Wise Analysis</h2>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-700 font-medium">HTML Tools, Forms, History</p>
            <span className="text-sm font-semibold text-blue-500">80%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-blue-100 relative">
            <div className="h-2 rounded-full bg-blue-500" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-700 font-medium">Tags & References in HTML</p>
            <span className="text-sm font-semibold text-orange-500">60%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-orange-100 relative">
            <div className="h-2 rounded-full bg-orange-500" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-700 font-medium">Tables & References in HTML</p>
            <span className="text-sm font-semibold text-red-500">24%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-red-100 relative">
            <div className="h-2 rounded-full bg-red-500" style={{ width: '24%' }}></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-700 font-medium">Tables & CSS Basics</p>
            <span className="text-sm font-semibold text-green-500">96%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-green-100 relative">
            <div className="h-2 rounded-full bg-green-500" style={{ width: '96%' }}></div>
          </div>
        </div>
      </div>

      <div className="border rounded-md p-6 m-5 bg-white shadow-sm">
        <div className="flex items-start">
          <h2 className="text-xl font-bold">Question Analysis</h2>
          <span className="ml-auto text-blue-600 font-bold">{data.currentScore}/15</span>
        </div>
        <p className="text-gray-600 mt-1 mb-4">
          You scored {data.currentScore} questions correct out of 15. However, it still needs some improvements
        </p>
        <div className="flex justify-center items-center bg-white">
          <div className="w-full max-w-[300px] p-4 bg-white rounded-2xl relative">
            <ApexCharts options={options} series={[questionPercentage, 100 - questionPercentage]} type="donut" height={250} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/target-object.svg" alt="Target" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
