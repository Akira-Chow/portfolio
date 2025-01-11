import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { data } from "../shared/data";

export default function Home() {
  return (
    <>
      <Header
        data={data.header}
        nav={Object.keys(data.content).map((item) => item)}
      />
      <Content data={data.content} />
    </>
  );
}
