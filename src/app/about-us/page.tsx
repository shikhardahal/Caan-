'use client';
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { NextPage } from "next";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({
    chairman_img_url: "",
    chairman_msg: "",
    chairman_name: '',
    description: "",
    mission: "",
    goal: "",
    title: "",
    vision: "",
    img_url: ""
  });
  const [teamData, setTeamData] = useState([]);
  const [topData, setTopData] = useState({
    TopTitle: "",
    TopDesc: "",
    TopImage: "",
    CardTitle1: "",
    CardDesc1: "",
    CardTitle2: "",
    CardDesc2: "",
    CardTitle3: "",
    CardDesc3: "",
    HeadMsgTitle: "",
    HeadMsgDesc: "",
    HeadName: "",
    HeadImage: "",
  });

  useEffect(() => {
    fetch("http://localhost:1337/api/about-us?populate=*")
      .then(res => res.json())
      .then(aboutUsData => {
        console.log(aboutUsData, '----------- ')
        setAboutUsData({
          chairman_img_url: 'http://localhost:1337' + aboutUsData.data.attributes.chairman_img_url.data.attributes.url,
          chairman_msg: aboutUsData.data.attributes.chairman_msg,
          chairman_name: aboutUsData.data.attributes.chairman_name,
          description: aboutUsData.data.attributes.description,
          mission: aboutUsData.data.attributes.mission,
          goal: aboutUsData.data.attributes.goal,
          title: aboutUsData.data.attributes.title,
          vision: aboutUsData.data.attributes.vision,
          img_url: 'http://localhost:1337' + aboutUsData.data.attributes.img_url.data.attributes.url
        });
        const topItem = aboutUsData.data[0];
        const imageUrl = topItem.attributes.TopImage.data.attributes.url;
        const headimage = topItem.attributes.HeadImage.data.attributes.url;
        setTopData({
          TopTitle: topItem.attributes.TopTitle,
          TopDesc: topItem.attributes.TopDesc,
          TopImage: imageUrl,
          CardTitle1: topItem.attributes.CardTitle1,
          CardTitle2: topItem.attributes.CardTitle2,
          CardTitle3: topItem.attributes.CardTitle3,
          CardDesc1: topItem.attributes.CardDesc1,
          CardDesc2: topItem.attributes.CardDesc2,
          CardDesc3: topItem.attributes.CardDesc3,
          HeadMsgTitle: topItem.attributes.HeadMsgTitle,
          HeadMsgDesc: topItem.attributes.HeadMsgDesc,
          HeadName: topItem.attributes.HeadName,
          HeadImage: headimage,
          // TeamName: teamsData.data[3].attributes.TeamName,
          // Post: teamsData.data[3].attributes.Post,
          // TeamImage: teamimage
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // fetch("http://localhost:1337/api/our-teams?populate=*")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Assuming data is an array of team items
    //     setTeamData(data.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  }, []);

  return (
    <>
      <div>
        <div className={styles.wholecontainer}>
          <div className={styles.imagecont}>
            <img src={aboutUsData.img_url} alt="image" />
          </div>
          <div className={styles.rightfield}>
            <div className={styles.toptitle}>{aboutUsData.title}</div>
            <div className={styles.topdesc}>{aboutUsData.description}</div>
          </div>
        </div>
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>Our Mission</div>
            <div className={styles.textcontent}>
              {aboutUsData.mission}
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>Our Vision</div>
            <div className={styles.textcontent}>
              {aboutUsData.vision}
            </div>
          </div>
        </div>
        <div className={styles.textfieldcontainer}>
          <div className={styles.textfield}>
            <div className={styles.textcontent}>Our Goal</div>
            <div className={styles.textcontent}>
              {aboutUsData.goal}
            </div>
          </div>
        </div>
      </div>

      {/* <TopMessage topData={topData} /> */}

      <div>
        <div className={styles.completecontainer}>
          <div className={styles.msgcontainer}>


            <div className={styles.msgtitle}>
              Message from Our Head
            </div>
            <div className={styles.msgdesc}>
              {aboutUsData.chairman_msg}
            </div>
            <div className={styles.chairmanname}>
              {aboutUsData.chairman_name}
            </div>
          </div>
          <div className={styles.chairmanimage}>
            <img src={aboutUsData.chairman_img_url} alt="image" />
          </div>
        </div>
      </div>
      {/* <div className={styles.teamcontainer}>
        {teamData?.map((teamItem, index) => (
          <div className={styles.teamfieldcontainer} key={index}>
            <div className={styles.teamfield}>
              <div className={styles.teamimage}>
                <img src={`http://localhost:1337${teamItem.attributes.TeamImage.data.attributes.url}`} alt="image" />
              </div>
              <div className={styles.textname}>{teamItem.attributes.TeamName}</div>
              <div className={styles.textpost}>{teamItem.attributes.Post}</div>
            </div>
          </div>
        ))}
      </div> */}
      {/* <ChairmanMsg topData={topData} /> */}
      {/* <TeamField topData={topData}/> */}
      {/* <div className={styles.teamcontainer}>
        {teamData?.map((teamItem, index) => (
          <div className={styles.teamfieldcontainer} key={index}>
            <div className={styles.teamfield}>
              <div className={styles.teamimage}>
                <img src={`http://localhost:1337${teamItem.attributes.TeamImage.data.attributes.url}`} alt="image" />
              </div>
              <div className={styles.textname}>{teamItem.attributes.TeamName}</div>
              <div className={styles.textpost}>{teamItem.attributes.Post}</div>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

// const TeamField: NextPage<Props> = (props) => {
//   const { topData } = props;

//   if (!topData || !topData.TeamName) {
//     return null; // Render nothing if topData is null, undefined, or does not contain TeamName
//   }

//   let img_url = `http://localhost:1337${topData.TeamImage}`;
//   return (
//     <>
//       <div className={styles.App}>Our Team</div>
//       <div className={styles.teamcontainer}>
//         <div className={styles.teamfieldcontainer}>
//           <div className={styles.teamfield}>
//             <div className={styles.teamimage}>
//               <img src={img_url} alt={`Team Member ${topData.TeamName}`} />
//             </div>
//             <div className={styles.textname}>{topData.TeamName}</div>
//             <div className={styles.textpost}>{topData.Post}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };



interface Props {
  topData: {
    TopTitle: string,
    TopDesc: string,
    TopImage: string,
    HeadMsgTitle: string,
    HeadMsgDesc: string,
    HeadName: string,
    HeadImage: string,
    // TeamName: string,
    // Post: string,
    // TeamImage: string,
  }
}

const TopMessage: NextPage<Props> = (props) => {
  const { topData } = props;
  // console.log(topData.TopImage);
  let img_url = `http://localhost:1337${topData.TopImage}`
  return (
    <div>
      <div className={styles.wholecontainer}>
        <div className={styles.imagecont}>
          <img src={img_url} alt="image" />
        </div>
        <div className={styles.rightfield}>
          <div className={styles.toptitle}>{topData.TopTitle}</div>
          <div className={styles.topdesc}>{topData.TopDesc}</div>
        </div>
      </div>
    </div>
  );
};

const ChairmanMsg: NextPage<Props> = (props) => {
  const { topData } = props;
  let img_url = `http://localhost:1337${topData.HeadImage}`
  return (
    <div>
      <div className={styles.completecontainer}>
        <div className={styles.msgcontainer}>


          <div className={styles.msgtitle}>
            {topData.HeadMsgTitle}
          </div>
          <div className={styles.msgdesc}>
            {topData.HeadMsgDesc}
          </div>
          <div className={styles.chairmanname}>
            {topData.HeadName}
          </div>
        </div>
        <div className={styles.chairmanimage}>
          <img src={img_url} alt="image" />
        </div>
      </div>
    </div>
  );

};


export default AboutUs;
