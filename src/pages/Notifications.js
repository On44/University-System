import React, { useState, useEffect } from "react";
import "./Notifications.css";

function Notifications() {
  // State to manage notifications list
  const [notifications, setNotifications] = useState([]);
  const [newNotification, setNewNotification] = useState("");
  const [message, setMessage] = useState("");

  // Fetching notifications from an API (simulated)
  useEffect(() => {
    // Simulate fetching data (replace with real API call)
    const fetchedNotifications = [
    ];
    setNotifications(fetchedNotifications);
  }, []);

  // Handle adding a new notification
  const handleAddNotification = () => {
    if (newNotification.trim()) {
      const newNotificationObject = {
        id: notifications.length + 1,
        message: newNotification,
      };
      setNotifications([...notifications, newNotificationObject]);
      setNewNotification(""); // Clear input field
      setMessage("Notification added successfully!");
    } else {
      setMessage("Please enter a notification message.");
    }
  };

  // Handle removing a notification
  const handleRemoveNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
    setMessage("Notification removed successfully!");
  };

  return (
    <div className="notifications-content">
      <h2>Manage Notifications</h2>

      {/* Notification creation form */}
      <div className="new-notification">
        <textarea
          rows="4"
          value={newNotification}
          onChange={(e) => setNewNotification(e.target.value)}
          placeholder="Enter new notification message"
        />
        <button className="primary-button" onClick={handleAddNotification}>
          Add Notification
        </button>
      </div>

      {/* Display message */}
      {message && <p className="message">{message}</p>}

      {/* Notifications list */}
      <div className="notification-list">
        <h3>Existing Notifications</h3>
        <ul>
          {notifications.length === 0 ? (
            <p>No notifications available.</p>
          ) : (
            notifications.map((notification) => (
              <li key={notification.id} className="notification-item">
                <span>{notification.message}</span>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveNotification(notification.id)}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
