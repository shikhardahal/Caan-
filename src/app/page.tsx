'use client';
import { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import SearchBox from "@/components/search/Search";
import AboutCard from "../components/card/about/AboutCard"

export default function Home() {
  return (
    <div className={styles.main}>
      <SearchBox />
      <AboutCard />
    </div>
  )
}
