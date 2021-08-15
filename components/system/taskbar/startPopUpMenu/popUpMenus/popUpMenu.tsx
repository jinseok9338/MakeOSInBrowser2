import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faAirbnb,
  faAmazonPay,
  faYelp,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

type menusArrayType = { title: string; icon: IconDefinition }[];

const menusArray: menusArrayType = [
  { title: "Coffee", icon: faCoffee },
  { title: "Airbnb", icon: faAirbnb },
  { title: "Youtube", icon: faYoutubeSquare },
  { title: "Yelp", icon: faYelp },
  { title: "AmazonPay", icon: faAmazonPay },
];
//[{name:"",icon:""},...]

const PopUpMenu = (): JSX.Element => (
  <>
    {menusArray.map((obj) => (
      <>
        <ListItem button key={obj.title}>
          <ListItemAvatar>
            <Avatar>
              <FontAwesomeIcon icon={obj.icon} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={obj.title} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    ))}
  </>
);

export default PopUpMenu;
