import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VolumeIndicator = ({ volume }) => {
    const data = {
        labels: ['Fuel Volume'],
        datasets: [
            {
                label: 'Volume',
                data: [volume],
                backgroundColor:
                    volume < 25 ? 'red' : volume < 50 ? 'orange' : 'green',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                max: 100,
                min: 0,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default VolumeIndicator;
