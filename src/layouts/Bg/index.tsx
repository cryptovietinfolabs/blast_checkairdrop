import s from "./style.module.scss";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Bg(): React.ReactElement {
  return (
    <Box className={s.bg_deco_wrapper}>
      <Box className={s.bg_deco}>
        <Image src="/ellipse.png" alt="background deco" fill />
      </Box>
    </Box>
  );
}
