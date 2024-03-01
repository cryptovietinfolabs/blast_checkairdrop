import { Text } from "@chakra-ui/react";

import s from "./style.module.scss";

export default function Footer(): React.ReactElement {
  return (
    <footer className={s.footer}>
      <Text fontSize="md" color="brand.yellow.100" align="center">
        © 2024 by BLE BLE. All rights reserved!
      </Text>
    </footer>
  );
}
