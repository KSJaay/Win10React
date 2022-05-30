import { useState } from "react";
import styled from "styled-components";
import ReactCalendar from "react-calendar";
import { motion, AnimatePresence } from "framer-motion";
import dayjs from "dayjs";

export default function ReactCalendarPopup({ date, time, active }) {
  const [value, onChange] = useState(date);

  return (
    <AnimatePresence>
      {active && (
        <Content id="react-calendar__container">
          <Header id="react-calendar__header">
            <Time id="react-calendar__time">
              {time && dayjs(time).format("HH:mm:ss")}
            </Time>
            <Date id="react-calendar__date">
              {time && dayjs(time).format("MMM DD, YYYY")}
            </Date>
          </Header>
          <ReactCalendar onChange={onChange} value={value} />
        </Content>
      )}
    </AnimatePresence>
  );
}

const Content = styled(motion.div)`
  position: absolute;
  bottom: 48px;
  right: 0px;
  height: auto;
  z-index: 99;
  background-color: var(--secondary-color-opacity-70);
  padding-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0px 10px 15px;
  color: var(--font-color);
`;

const Time = styled.div`
  font-size: 2.5em;
`;

const Date = styled.div`
  font-size: 1.1em;
`;
