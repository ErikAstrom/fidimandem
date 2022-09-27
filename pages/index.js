import { HomePage } from "../components/home";
import { TextVideo } from "../components/textVideo";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row mx-auto ">
      <TextVideo/>
      <HomePage/>
    </section>
  );
}
