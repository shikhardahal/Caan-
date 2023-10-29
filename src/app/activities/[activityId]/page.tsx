import Activity from "../../../components/card/activity/Card"
import Banner from '@/components/banner'
import SubsribeBanner from "@/components/subscribe";
import Image from 'next/image'
import { FiHome } from "react-icons/fi";
import styles from './activitydetail.module.css';

async function getData(id: string) {
  var options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': '',
      'Authorization': `bearer ${process.env.API_TOKEN}`
    }
  }
  let url = 'http://localhost:1337/api/activity-pages?populate=*'
  // let activityDetailUrl = `http://localhost:1337/api/activities/${id}`
  const res = await fetch(url);

  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }
  return res.json()
}

export default async function AboutActivity({ params }: { params: { activityId: string } }) {
  let data = await getData(params.activityId);
  let button = data.data[0].attributes.ActivityButton;
  let cards = data.data[0].attributes.card;
  console.log(cards);
  //fetch  {params.activityId}
  const paragraph = ` SSL (SANKALPA SHIPPING AND LOGISTICS PVT. LTD.) Specializes in providing
      top- tier airfreight solutions to meet the diverse needs of our clients.
      With our extensive network of global partners and a dedicated team of
      logistics experts, we ensure that your cargo reaches its destination
      swiftly and securely. Whether you require expedited shipping for
      high-value goods, just-in-time inventory management, or customized supply
      chain solutions, SSL has the expertise to deliver on your logistics goals.
      <br />
      <br />
      Our extensive network of global partners and a dedicated team of logistics
      experts, we ensure that your cargo reaches its destination swiftly and
      securely. Whether you require expedited shipping for high-value goods,
      just-in-time inventory management, or customized supply chain solutions,
      SSL has the expertise to deliver on your logistics goals.
      <br/><br/> Whether you require expedited shipping for high-value
goods, just-in-time inventory management, or customized supply chain
solutions, SSL has the expertise to deliver on your logistics goals. `;

  const otherItems = [
    {
      image: '/activity_small_1.png',
      name: 'Lorem ipsum dolar consecut asdasdasen paradel marco',
    },
    {
      image: '/activity_small_2.png',
      name: 'Lorem ipsum dolar consasdasdecut en paradel marco',
    },
    {
      image: '/activity_small_3.png',
      name: 'Lorem ipsum dolar conseasdasdcut en paradel marco',
    },
    {
      image: '/activity_small_4.png',
      name: 'Lorem ipsum dolar consecut asdasden paradel marco',
    },
    {
      image: '/activity_small_5.png',
      name: 'Lorem ipsum dolar consecut enasdasd paradel marco',
    },
    {
      image: '/activity_page.png',
      name: 'Lorem ipsum dolar consecut en pasdasaradel marco',
    },
  ];
  return (
    <div>
      {/* {<HomeIcon />} */}
      <Banner name="Activites" title="ANSSD Yearly Conference" icon={<FiHome />} />
      <div className="container">
        <div className={styles.activity__Container}>
          <div className={styles.activity__Contents}>
            <h1>ANSSD Yearly Conference</h1>
            <div className="">
              <Image src="/activity_page.png" alt="activity banner" width="950" height="550" />
            </div>
            <h4>17 January 2023</h4>
            <div dangerouslySetInnerHTML={{ __html: paragraph }} ></div>
          </div>
          <div className={styles.activity__Lists}>
            <h3>Other Latest Activities</h3>
            <div className={styles.activity__Lists__ItemWrapper}>
              {otherItems.slice(0, 5).map((item) => (
                <div className={styles.activity__Lists__Item} key={item.name}>
                  <div className={styles.activity__Lists__Image}>
                    <Image
                      src={item.image}
                      height={70}
                      width={100}
                      alt="img"
                    />
                  </div>
                  <div className="">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubsribeBanner />
    </div >
  );
}
