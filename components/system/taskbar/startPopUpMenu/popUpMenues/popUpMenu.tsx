import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faAirbnb,
  faAmazonPay,
  faYelp,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { ProcessConsumer } from "contexts/process";

type menusArrayType = { title: string; icon: IconDefinition }[];

const menusArray: menusArrayType = [
  { title: "Coffee", icon: faCoffee },
  { title: "Airbnb", icon: faAirbnb },
  { title: "Youtube", icon: faYoutubeSquare },
  { title: "Yelp", icon: faYelp },
  { title: "AmazonPay", icon: faAmazonPay },
];

type PopUpMenuProps = {
  handleClose: () => void;
};

const PopUpMenu = ({ handleClose }: PopUpMenuProps): JSX.Element => (
  <ProcessConsumer>
    {({ open }) => (
      <>
        {menusArray.map((obj) => (
          <>
            <ListItem
              button
              key={obj.title}
              onClick={() => {
                open("HelloWorld");
                handleClose();
              }}
            >
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
    )}
  </ProcessConsumer>
);

export default PopUpMenu;
