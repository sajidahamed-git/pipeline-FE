import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode/baseNode';

export const NotificationsNode = ({ id, data }) => {
  const [notificationType, setNotificationType] = useState(data?.notificationType || 'sms');

  const handleNotificationChange = (e) => setNotificationType(e.target.value);

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`,
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode id={id} title="Notifications" handles={handles}>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            name={`notification-${id}`}
            value="sms"
            checked={notificationType === 'sms'}
            onChange={handleNotificationChange}
            className="accent-purple-600"
          />
          SMS
        </label>
        <label className="flex items-center gap-2 text-white">
          <input
            type="radio"
            name={`notification-${id}`}
            value="email"
            checked={notificationType === 'email'}
            onChange={handleNotificationChange}
            className="accent-purple-600"
          />
          Email
        </label>
      </div>
    </BaseNode>
  );
};
