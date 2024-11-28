import { useState, useEffect } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import useFetch from "../hooks/useFetch";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering the necessary components of Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface Widget {
    foodId: string | null;
    APIKEY: string | undefined
}

interface NutritionData {
    name: string;
    amount: number;
    unit: string;
    percentOfDailyNeeds: number
}

interface PieDatas {
    labels: string[];
    datasets: Datasets[]
}

interface Datasets {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
}

interface Options {
    responsive: boolean;
    maintainAspectRatio: boolean;
    plugins: object;
}

const NutritionWidget = ({foodId, APIKEY}: Widget) => {
    const {data, loading, error} = useFetch(`https://api.spoonacular.com/recipes/${foodId}/nutritionWidget.json?apiKey=${APIKEY}`);
    const [nutrients, setNutrients] = useState<NutritionData[]>([]);
    const [pieData, setPieData] = useState<PieDatas>();
    const [options, setOptions] = useState<Options>();


    useEffect(() => {
        if (data && data.nutrients) {
            setNutrients(data.nutrients)
        }
    }, [data])

    useEffect(() => {
        const neededValues = ['Calories', 'Fat', 'Carbohydrates', 'Protein', 'Sugar'];
        const nutrientsArray = nutrients.filter(nutrient => neededValues.includes(nutrient.name));
        const datas = {
            labels: nutrientsArray.map(nutrient => nutrient.name), 
            datasets: [
              {
                label: "Nutrition Information",
                data: nutrientsArray.map((nutrient) => nutrient.amount),
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "#fc9b2d" 
                ],
                hoverOffset: 4,
              },
            ],
          };

        const units: any = {
        Calories: "kcal",
        Fat: "g",
        Carbohydrates: "g",
        Protein: "g",
        Sugar: "g"
        };

          setOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                enabled: true,
                callbacks: {
                  label: function (context: any) {
                    const label = context.label || ""; // Get the label
                    const value = context.raw; // Get the value
                    const unit = units[label] || ""; // Get the unit for the label
                    return `${label}: ${value} ${unit}`;
                  },
                },
              },
            },
          });
        setPieData(datas)
    }, [nutrients])


    return (
      <>
        {loading && <Loading />}
        {error && <ErrorPage error={error} />}
        <div className="w-full h-96">
          {pieData && <Pie data={pieData} options={options}/>}
        </div>
    </> 
    )
}
 
export default NutritionWidget;