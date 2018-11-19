import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Button from "@mydesignsystem/button";
import Link from "@mydesignsystem/link";
import Modal from "@jsport/lordgun-design-system-modal";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Link", module).add("with text", () => <Link>Hello Button</Link>);
storiesOf("Modal", module).add("base", () => <Modal />);
