import React, { useState, useEffect } from 'react';
import './Notification.css';
/*
  This component renders the notification text in a <div> tag along with the relevant styles as indicated
  by the notification type
*/
const Notification = ({ notification, type }) => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Code to clear or hide the notification
      clearNotification();
    }, 10000); // Adjust the timeout duration as needed

    return () => clearTimeout(timeoutId);
  }, [notification, type]);

  const clearNotification = () => {
    // Set the state to hide the notification
    setIsVisible(false);
  };


   // If the notification state is null, then don't render anything
  if (!isVisible || notification === null || !['success', 'error'].includes(type)) {
    return null;
  }
 
  
  // Render a <div> with the notification class style attached along with the type of notification ("success", "error")
  // The content of the div will be the text that's stored in the notification state
  return (
    <div className={`${type} notification`}>
      {notification}
    </div>
  )
}

export default Notification




  
