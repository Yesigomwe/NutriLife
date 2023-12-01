import "./Home.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
function Home() {
  return (
    <MantineProvider>
      <home></home>
    </MantineProvider>
  );
}

export default Home;
