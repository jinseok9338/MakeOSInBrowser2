import StyledClock from "components/system/taskbar/Clock/StyledClock";
import useClock from "components/system/taskbar/Clock/useClock";
import useLocaleDateTime from "components/system/taskbar/Clock/useLocaleDateTime";
import React from "react";

const Clock = (): JSX.Element => {
    const now = useClock();
    const { date, time, dateTime } = useLocaleDateTime(now);

    return (
        <StyledClock dateTime={dateTime} title={date} suppressHydrationWarning>
            {time}
        </StyledClock>
    );
};

export default Clock;
