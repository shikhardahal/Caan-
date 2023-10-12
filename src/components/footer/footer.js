import React from 'react';
import styles from './footer.module.css';

const Footer = ({ data }) => {
  const attributes = data[0].attributes;

  return (
    <div className={styles['footer-container']}>
      <div className="wrapper">
        <footer className={styles.footer}>
          <ul className={styles['footer-list']}>
            <li><a href="/about-ansdd">{attributes.AboutANSDD || 'About'}</a></li>
            <li><a href="/most-viewed">{attributes.MostViewed || 'Most Viewed'}</a></li>
            <li><a href="/documents">{attributes.Documents || 'Documents'}</a></li>
            <li><a href="/about-ansdd-content">{attributes.AboutANSDDContentgoeshere || 'AboutAnsddContentGoesHere'}</a></li>
            <li><a href="/our-team">{attributes.OurTeam || 'Our Team'}</a></li>
            <li><a href="/who-we-are">{attributes.WhoWeAre || 'Who We Are'}</a></li>
            <li><a href="/what-we-do">{attributes.WhatWeDo || 'What We Do'}</a></li>
            <li><a href="/operation-safety">{attributes.OperationSafety || 'Operation Safety'}</a></li>
            <li><a href="/personal-licensing">{attributes.PersonalLiscening || 'Personal Licensing'}</a></li>
            <li><a href="/copyright">{attributes.CopyRight || 'CopyRight'}</a></li>
            <li><a href="/privacy-policy">{attributes.PrivacyPolicy || 'Privacy Policy'}</a></li>
            <li><a href="/disclaimer">{attributes.Disclaimer || 'Disclaimer'}</a></li>
            <li><a href="/accessibility">{attributes.Accessibility || 'Accessibility'}</a></li>
            <li><a href="/civil-aviation-act-2015">{attributes.CivilAviationAct2015 || 'Civil Aviation Act 2015'}</a></li>
            <li><a href="/civil-aviation-authority-act">{attributes.CivilAviationAuthorityAct || 'Civil Aviation Authority Act'}</a></li>
            <li><a href="/civil-aviation-authority-rule-2016">{attributes.CivilAviationAuthorityRule2016 || 'Civil Aviation Authority Rule 2016'}</a></li>
            <li><a href="/civil-aviation-security-rule-english">{attributes.CivilAviationSecurityRuleEnglish || 'Civil Aviation Security Rule (English)'}</a></li>
            <li><a href="/various-sops">{attributes.VariousSops || 'Various SOPs'}</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
