import React from 'react';
import { Line } from 'react-chartjs-2';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

function PriceGraph() {
	let width, height, gradient;

	const getGradient = (ctx, chartArea) => {
		const chartWidth = chartArea.right - chartArea.left;
		const chartHeight = chartArea.bottom - chartArea.top;
		if (!gradient || width !== chartWidth || height !== chartHeight) {
			// Create the gradient because this is either the first render
			// or the size of the chart has changed
			width = chartWidth;
			height = chartHeight;
			gradient = ctx.createLinearGradient(
				0,
				chartArea.bottom,
				0,
				chartArea.top
			);
			gradient.addColorStop(0, '#839451');
			gradient.addColorStop(0.5, '#43767B');
		}

		return gradient;
	};

	const labels = [
		['08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00'],
		['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		[
			'04/07/22',
			'09/07/22',
			'14/07/22',
			'19/07/22',
			'24/07/22',
			'29/07/22',
			'04/08/22',
		],
	];
	const datasets = [
		[3.4, 3.5, 7, 6, 1, 3.9, 5],
		[3.4, 2, 8, 5, 7, 6, 9, 3, 2, 1],
		[3.4, 10, 5, 4, 6, 2, 3, 2, 10],
	];
	const [timeSelected, setTimeSelected] = React.useState(0);
	const data = {
		labels: labels[timeSelected],
		datasets: [
			{
				label: 'Moonlight NFT',
				data: datasets[timeSelected],
				borderColor: function (context) {
					const chart = context.chart;
					const { ctx, chartArea } = chart;

					if (!chartArea) {
						// This case happens on initial chart load
						return;
					}
					return getGradient(ctx, chartArea);
				},
				lineTension: 0.3,
			},
		],
	};

	const timeRanges = [
		{
			time: 'day',
			display: '1D',
		},
		{
			time: 'week',
			display: '1W',
		},
		{
			time: 'month',
			display: '1M',
		},
	];

	return (
		<div className="w-full h-full p-8">
			<form className="flex justify-between items-center mb-4">
				<div className="py-2 px-4 rounded-3xl border-2 border-[#585757]">
					Moonlight NFT
				</div>
				<div className="flex border-2 border-[#585757] rounded-2xl overflow-hidden">
					{timeRanges.map(({ time, display }, index) => (
						<label
							htmlFor={time.toString()}
							className={`min-w-8 h-8 bg-transparent rounded-xl flex flex-col items-center justify-center cursor-pointer duration-200 ${
								timeSelected === index ? 'bg-[#585757] scale-110' : ''
							} checked:bg-accent px-3 py-2`}
							key={`dates-${index}`}>
							{display}
							<input
								type="checkbox"
								className="hidden"
								selected={timeSelected === index}
								id={time.toString()}
								onChange={e => {
									setTimeSelected(index);
								}}
							/>
						</label>
					))}
				</div>
			</form>
			<div className="w-full h-full">
				<Line
					data={data}
					options={{
						responsive: true,
						plugins: {
							legend: {
								display: false,
							},
						},
					}}
				/>
			</div>
		</div>
	);
}

export default PriceGraph;
