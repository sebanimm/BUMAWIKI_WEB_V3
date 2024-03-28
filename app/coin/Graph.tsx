"use client";

import { coinQuery } from "@/services/coin/coin.query";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { FC, useState } from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import { dateText, moneyText } from "@/utils";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import * as styles from "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  pointStyle: "circle",
  pointBorderWidth: 0,
  cubicInterpolationMode: "monotone",
  plugins: { legend: { display: false }, title: { display: false } },
  interaction: { intersect: false },
};

const cycleList = [
  { name: "전체", id: "full" },
  { name: "보름", id: "halfMonth" },
  { name: "일주일", id: "week" },
  { name: "하루", id: "day" },
  { name: "12시간", id: "halfDay" },
  { name: "3시간", id: "threeHours" },
];

interface GraphProps {
  updatedAt: Date;
  marketPrice: number;
}

const Graph: FC<GraphProps> = ({ updatedAt, marketPrice }) => {
  const [cycle, setCycle] = useState("threeHours");
  const { data: coin } = useSuspenseQuery(coinQuery.graph(cycle));

  const labels = coin.map(({ startedTime }: { startedTime: Date }) =>
    dayjs(startedTime).format("M/D H:m"),
  );
  const data = coin.map(({ price }: { price: string }) => price);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <div className={styles.chartCoinBox}>
          <Image alt="bumacoin" src="/assets/bumacoin.png" width={54} height={54} />
          <div className={styles.chartCoinInfoBox}>
            <span className={styles.chartCoinTitle}>₩{moneyText(marketPrice)}</span>
            <span className={styles.chartCoinDate}>{dateText(updatedAt)}</span>
          </div>
        </div>
        <div className={styles.categoryBox}>
          {cycleList.map((cycleItem) => {
            const className =
              cycle === cycleItem.id ? styles.category.ENABLED : styles.category.DISABLED;
            return (
              <button
                key={cycleItem.id}
                onClick={() => setCycle(cycleItem.id)}
                className={className}
              >
                {cycleItem.name}
              </button>
            );
          })}
        </div>
      </div>
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              data,
              fill: true,
              label: "부마코인",
              borderColor: "#274168",
              borderWidth: 1.5,
              backgroundColor: "#274168AA",
            },
          ],
        }}
      />
    </div>
  );
};

export default Graph;