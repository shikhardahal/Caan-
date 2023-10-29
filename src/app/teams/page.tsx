'use client';
import React, { useEffect, useState, FC } from "react";
import styles from "./styles.module.css";
import { NextPage } from "next";

const OurTeam = () => {
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1337/api/teams?populate=*")
            .then((response) => response.json())
            .then((data) => {
                // Assuming data is an array of team items
                setTeamData(data.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <div className={styles.teamcontainer}>
                {teamData?.map((teamItem, index) => (
                    <div className={styles.teamfieldcontainer} key={index}>
                        <div className={styles.teamfield}>
                            <div className={styles.teamimage}>
                                <img src={`http://localhost:1337${teamItem.attributes.img_url.data.attributes.url}`} alt="image" />
                            </div>
                            <div className={styles.textname}>{teamItem.attributes.name}</div>
                            <div className={styles.textpost}>{teamItem.attributes.designation}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OurTeam;

// pagination = http://localhost:1337/api/our-teams?populate=TeamImage&pagination[page]=1&pagination[pageSize]=2