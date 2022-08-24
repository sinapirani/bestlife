import React, { useState } from "react"
import { ApexOptions } from "apexcharts"
import dynamic from "next/dynamic"
const ReactApexChart = dynamic(() => import("react-apexcharts"), {ssr:false})


const Grows = () => {

    const options: ApexOptions =
    {
        chart: {
            height: 450,
            type: 'area',
            toolbar: {
                show: false,
                tools: {
                    zoom: true,
                    zoomin: false,
                    zoomout: false
                }
            },
            offsetX: 0,
            offsetY: 0,
            sparkline:{
                enabled: true
            }
        },
        fill:{
            type: 'gradient',
            gradient:{
                shade: '#ea9b08',
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 100],
            },
        },
        colors: ['#ea9b08', '#eab908'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            labels:{
                show: false
            },
            axisBorder: {
                show: false,
            },
            axisTicks:{
                show: false
            }
        },
        yaxis:{
            show: false
        }, 
        tooltip: {
            
            x: {
                show:false,
                format: 'dd/MM/yy HH:mm'
            },
        },

        grid:{
            show: false
        }
        
    }

    const [series, setSeries] = useState<any>([
        {
            name: 'series1',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ])


    return(
        <div className=" gap-y-3 pt-6 flex flex-col justify-center items-center min-h-[240px] rounded-2xl overflow-hidden shadow-2xl shadow-[#1e2738] bg-[#1f283a] ">
            
            <div className="w-full flex flex-col items-start ">
                <p className=" text-base text-gray-300 mr-2 font-extrabold self-start">شاخص رشد</p>
                <p className=" text-[0.5rem] mr-2 text-red-400">به دلیل اینکه هنوز رشدی ندارید <br /> چارت‌ها مقدار تصادفی دارند !</p>
            </div>
            <ReactApexChart options={options} type={'area'} series={series} height={200} width={280} />
        </div>
    )
}

export default Grows