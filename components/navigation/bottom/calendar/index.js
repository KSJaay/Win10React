// Import node modules
import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

// Import components
import ReactCalendarPopup from "./popup";

// Import mobx
import { rootStore, RootStoreContext } from "../../../../stores/RootStore";

export default function Calendar() {
  const [time, setTime] = useState(null);

  const RootStore = useContext(RootStoreContext);

  const { toggleMenu, options } = RootStore.navigationStore;

  useEffect(() => {
    let timeInterval = setInterval(() => {
      setTime(new window.Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <Content>
      <ReactCalendarPopup
        date={new Date()}
        active={options.calendar}
        time={time}
      />
      <Container onClick={() => toggleMenu("calendar")}>
        <Time>{dayjs(time).format("HH:mm")}</Time>
        <DateBlock>{dayjs(time).format("DD/MM/YYYY")}</DateBlock>
      </Container>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
  padding: 0 8px;

  &:hover {
    background-color: var(--navbar-hover);
  }
`;

const Time = styled.div``;

const DateBlock = styled.div``;
