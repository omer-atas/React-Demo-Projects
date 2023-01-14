import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />
        <Dropdown pointing="top left" text="Engin">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
