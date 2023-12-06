export function AboutUs() {
  return (
    <div className=" flex flex-col items-center">
      <div className=" about-text bg-green w-1290 h-700">
        <h1 className="text-48 font-bold text-orange">Why NutriLife?</h1>
        <div className="text-30 text-white">
          <p>
            Are you looking for a recipe to make a healthy meal? <br />
            You are in the right place. We have recipes for all your needs.{" "}
          </p>
          <br />
          <p>
            Whether you want to try a continental recipe, watching your weight,
            <br /> body building, breast feeding, expecting a baby, whoever you
            are, <br /> we have just the right recipe for you to make.
          </p>
          <br />
          <p>
            You don’t have to always eat roadside foods <br /> just because you
            don’t know how to cook!
          </p>
        </div>
      </div>
      <h1 className="border-2 border-solid border-orange text-orange font-bold text-48 w-1290 mt-8 mb-8">
        Meet Our <span className="text-green">Team</span>
      </h1>
      <div>
        <div className="bg-green w-1290 m-4 p-4 grid gap-64 grid-cols-2 grid-rows-3">
          <div className="w-300 h-300">
            <Profile />
          </div>
          <div className="w-300 h-300">
            <Profile />
          </div>
          <div className="w-300 h-300">
            <Profile />
          </div>
          <div className="w-300 h-300">
            <Profile />
          </div>
          <div className="w-300 h-300">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card, Image, Text, Group } from "@mantine/core";

function Profile() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src="src/assets/kennedy.jpeg" height={160} alt="profile_image" />
      </Card.Section>

      <Group className="flex flex-col" justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Kennedy</Text>
        <Text fw={500}><a href="#">@Kennedy</a></Text>
      </Group>

      <Text size="sm" c="dimmed">
        This person contributed to the building of this project.
      </Text>
    </Card>
  );
}
