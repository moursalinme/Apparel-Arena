
import Chart from "react-apexcharts";

const chartValue = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
};


const SellerChart = () => {
    return (
        <div>
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={chartValue.options}
                            series={chartValue.series}
                            type="bar"
                            width="50%"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerChart;