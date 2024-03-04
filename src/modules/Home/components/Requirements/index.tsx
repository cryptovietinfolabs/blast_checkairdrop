import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

import Title from "@/components/Title";
import { collections } from "@/constants/collections";

import s from "./style.module.scss";

export default function Requirements(): React.ReactElement {
  return (
    <Card>
      <CardHeader>
        <Title color="brand.yellow.200" size="md">
          Blast Membership Requirements:
        </Title>
      </CardHeader>
      <CardBody>
        <Stack gap={6}>
          <Text color="brand.camo.200" fontSize="xl">
            You only need to satisfy one of three conditions to receive the
            airdrop
          </Text>
          <UnorderedList>
            <ListItem>
              <Stack>
                <Text fontSize="2xl" color="brand.yellow.100">
                  Holder 1+ NFT collections:
                </Text>
                <Flex gap={4} flexWrap="wrap">
                  {collections.map((collection) => (
                    <Button
                      key={collection.name}
                      variant="outline"
                      as="a"
                      href={collection.link}
                    >
                      <Flex alignItems="center" justifyContent="center" gap={4}>
                        <Box className={s.collection_img}>
                          <Image
                            src={collection.img}
                            alt={collection.name}
                            fill
                          />
                        </Box>
                        <Text color="brand.yellow.100" mr={2}>
                          {collection.name}
                        </Text>
                      </Flex>
                    </Button>
                  ))}
                </Flex>
              </Stack>
            </ListItem>
            <ListItem>
              <Text
                fontSize="2xl"
                color="brand.yellow.100"
                display="flex"
                alignItems="center"
              >
                Top 30% Pepe Holders
                <Box
                  className={s.collection_img}
                  as="span"
                  display="inline-block"
                  ml={2}
                >
                  <Image src="/pepe.png" alt="pepe" fill />
                </Box>
              </Text>
            </ListItem>
            <ListItem>
              <Text
                fontSize="2xl"
                color="brand.yellow.100"
                display="flex"
                alignItems="center"
              >
                Staked 0.01+ $ETH on Blast
                <Box
                  className={s.collection_img}
                  as="span"
                  display="inline-block"
                  ml={2}
                >
                  <Image src="/blast.png" alt="blast" fill />
                </Box>
              </Text>
            </ListItem>
          </UnorderedList>
        </Stack>
      </CardBody>
    </Card>
  );
}
