import React from 'react'
import styles from "./dashboard.module.css";
import { Card } from "./Card";
import { TbPlaneTilt } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaPlaneDeparture } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import CardSlider from "../../slider/index";

const sampleData = [
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: RiComputerLine, title: "Airport Info System" },
  { Icon: CiServer, title: "Central Navigation System" },
  { Icon: FaPlaneDeparture, title: "Search And Rescue" },
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
  { Icon: TbPlaneTilt, title: "Air Traffic System" },
]

const DashboardCard = () => {
  return (
    <CardSlider>
      <div className={styles.container}>
        {
          sampleData.map(item => (
            <Card key={item.title} Icon={item.Icon} title={item.title} />
          ))
        }
      </div>
    </CardSlider>
  )
}
1
export default DashboardCard;
