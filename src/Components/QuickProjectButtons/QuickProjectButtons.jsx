import React from 'react';

import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

import "./QuickProjectButtons.scss";


function Button(props)
{
  return <AwesomeButton type="primary" href={props.url}>{props.value}</AwesomeButton>;
}

function QuickProjectButtons(props){
  return(
    <div className="quickButtons">
      <div className="button">
        <Button
          value="Web Scraper Repo"
          url="https://github.com/KieranTH/Scraper"
        />
      </div>
      <div className="button">
        <Button
          value="PPT To PDF Repo"
          url="https://github.com/KieranTH/PPTtoPDF"
        />
      </div>
      <div className="button">
        <Button
          value="Social Discord Bot Repo"
          url="https://github.com/KieranTH/Social-Bot"
        />
      </div>
    </div>
  );
}

export default QuickProjectButtons;
