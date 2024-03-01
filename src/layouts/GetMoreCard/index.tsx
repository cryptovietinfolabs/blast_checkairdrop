import { Box, Card, CardBody, CardHeader, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import Title from "@/components/Title";

import s from "./style.module.scss";

export default function GetMoreCard(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <Box textAlign="center">
          <Title color="brand.yellow.100" size="md">
            Get more airdrop at:
          </Title>
        </Box>
      </CardHeader>
      <CardBody>
        <Stack alignItems="center" justifyContent="space-between">
          <Box className={s.getMore_img}>
            <Image src="/blast-galxe.png" alt="blast galxe" fill />
          </Box>
          <Text color="brand.yellow.100" fontSize="xl">
            Ble Ble on Galxe
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
