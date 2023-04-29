import React from 'react';
import {MdApps, MdVideoCall, MdNotifications} from 'react-icons/md'

export default function index() {
  return (
    <div className="buttons">
      <button className="icon-container">
        <MdVideoCall size={25} />
      </button>
      <button className="icon-container">
        <MdApps size={25} />
      </button>
      <button className="icon-container">
        <MdNotifications size={25} />
      </button>
    </div>
  );
}

