import React from "react";
import {NotificationStyle} from "../App.styled"

const Notification = ({ message}) => {
    return (
    <  NotificationStyle>{message}</  NotificationStyle>
          )

}

export default Notification;