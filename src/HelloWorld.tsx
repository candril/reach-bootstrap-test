import React, { FC, useState } from "react";
import styled from "styled-components";
import { Page } from "@reach/chrome";

import Button from "react-bootstrap/Button";
import RangeSlider from "react-bootstrap-range-slider";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.scss";
import "./test.scss";

export const HelloWorld: FC = () => {
  const [value, setValue] = useState<any>(0);

  return (
    <Page title="Hello World">
      <Host>
        <Container>
          <Button className="fancy" variant="primary">
            Primary
          </Button>

          <RangeSlider
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          />

          <div className="fancy">Hello World</div>
        </Container>
      </Host>
    </Page>
  );
};

const Host = styled.div``;

const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
`;
