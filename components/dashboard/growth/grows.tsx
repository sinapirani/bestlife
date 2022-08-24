import ReactApexChart from "react-apexcharts"
import React from "react"
import { ApexOptions } from "apexcharts"


const Grows = () => {
    const options: ApexOptions =
    {
        chart: {
            height: 450,
            type: 'area',
            toolbar: {
                show: true,
                tools: {
                    zoom: true,
                    zoomin: false,
                    zoomout: false
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#0000FF'],
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }
    return(
        <div className=" w-1/3 p-4 min-h-[240px] rounded-xl bg-yellow-500 shadow-xl shadow-yellow-400/20">
            <p className=" text-gray-800 font-extrabold  ">شاخص رشد</p>
            <ReactApexChart options={options}/>
        </div>
    )
}

export default Grows