// Libraries
import React, {useEffect} from "react";

// Styles

// Component Imports
import Notification from 'react-web-notification';

navigator.serviceWorker.register('/sw.js');


const PushNotifTest = () => {

  return (
    <div>
      <Notification title = "hello world" />
    </div>
  );
};

export default PushNotifTest;
