import { SessionConsumer } from 'contexts/session';
import React, {FC} from "react"


const StyledApp:FC = ({ children }) => (
    <>
        <SessionConsumer>
            {children}
        </SessionConsumer>
    </>
);

export default StyledApp;
