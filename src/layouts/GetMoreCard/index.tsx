import { Box, Card, CardBody, CardHeader, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import Title from "@/components/Title";

import s from "./style.module.scss";

export default function GetMoreCard(): React.ReactElement {
  return (
    <Card flexGrow={1}>
      <CardHeader>
        <Box textAlign="center">
          <Title color="brand.yellow.100" size="md">
            Get more airdrop at:
          </Title>
        </Box>
      </CardHeader>
      <CardBody>
        <Stack alignItems="center" justifyContent="space-between">
          <Box
            className={s.getMore_img}
            borderRadius="10px"
            as="a"
            href="https://galxe.com/MeeT2AiDRo73NiBYKoZdwa"
            target="_blank"
          >
            <Image src="/blast-galxe.png" alt="blast galxe" fill />
          </Box>
          <Text
            color="brand.yellow.100"
            fontSize="xl"
            as="a"
            href="https://galxe.com/MeeT2AiDRo73NiBYKoZdwa"
            target="_blank"
          >
            Airdrop Campaign on Galxe
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}
