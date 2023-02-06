import { HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TeamUser from "./TeamUser";

const data = [
  {
    name: "Suman",
    type: "UI DESIGNER",
    url: "https://avatars.githubusercontent.com/u/103638627?v=4",
    github: "https://github.com/dhullsuman",
    linkedin: "https://www.linkedin.com/in/suman-dhull-bb7829236/",
    portfolio: "https://dhullsuman.github.io/",
  },
  {
    name: "Nitesh Sindhu",
    type: "Backend Expert",
    url: "https://avatars.githubusercontent.com/u/88618256?v=4",
    github: "https://github.com/NiteshSindhu",
    linkedin: "https://www.linkedin.com/in/nitesh-sindhu-150473203/",
    portfolio: "https://niteshsindhu.github.io/",
  }
];

const About = () => {
  return (
      <>
      <VStack p={50}>
        <Text fontWeight={"semibold"} fontSize={{ base: "18px", md: "2xl" }}>
          Our Creative Team
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={5}>
          {data.map((el) => (
            <TeamUser data={el} />
          ))}
        </Stack>
          </VStack>
    </>
  );
};

export default About;
