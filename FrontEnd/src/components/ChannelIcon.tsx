import React from 'react';
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";

import { useDispatch } from 'react-redux';
import { setChannelInfo } from '../features/channelSlice';
import { ChatType, RoomType } from './Types/types';


const image = require('../../images/ponglogo.png');

const ServerIcon: React.FC<{
	choosenChat: ChatType;
	room: RoomType;
	onClick: (room: RoomType) => void;
}> = ({ room, onClick, choosenChat }) => {

  const dispatch = useDispatch();
  const switchChat = () => {
    dispatch(setChannelInfo); // what is dispatch
		console.log("aaaaaa");
	}


  return (
    <>
     <div onClick={switchChat}>
    <Tooltip interactive className="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-emerald-400 rounded-lg shadow-sm opacity-0 tooltip dark:bg-emerald-400"  content={room.name} placement="right" >
      {/* {dmNotifications > 0 && (
		  				<div className="notification-bubble">
		  					{dmNotifications}
		  				</div>
		  			)} */}
      <Avatar size="md"
        variant="circular"
      	src={image}
      	alt=""
		className=" bg-white bg-opacity-25 cursor-pointer rounded-3xl hover:rounded-md transition-all duration-100 ease-out  "
		/>
    </Tooltip>
  </div>
    </>
  )
}

export default ServerIcon
