import React, { useState, useEffect } from 'react';

// Assuming you have API calls to fetch notifications and update notification read status
const fetchNotifications = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/notifications');

    if (!response.ok) {
      throw new Error(`Failed to fetch notifications: ${response.statusText}`); // Handle non-200 status codes
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching notifications:', error.message);
    return []; // Return an empty array in case of errors to avoid rendering issues
  }
};

    // const contentType = response.headers.get('Content-Type');
    // if (!contentType || !contentType.includes('application/json')) {
    //   throw new Error('Invalid content type: Expected application/json');
    // }

   

const updateNotificationStatus = async (id, isRead) => {
  // Replace with your actual API call to update notification status
  const response = await fetch(`/api/notifications/${id}`, {
    method: 'post',
    body: JSON.stringify({ isRead }),
  });
  return response.ok;
};

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      const success = await updateNotificationStatus(id, true);
      if (success) {
        setNotifications(prevNotifications =>
          prevNotifications.map(notification => (notification.id === id ? { ...notification, is_read: true } : notification))
        );
      }
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  if (isLoading) return <div>Loading notifications...</div>;

  if (error) return <div>Error fetching notifications: {error.message}</div>;

  return (
    <div className="notification-page">
      {/* <h2>Notification List</h2> */}
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            <div className={`notification-item ${notification.is_read ? 'read' : ''}`}>
              <p>{notification.message}</p>
              <span>{notification.type}</span>
              <button onClick={() => handleMarkAsRead(notification.id)}>
                Mark as Read
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;