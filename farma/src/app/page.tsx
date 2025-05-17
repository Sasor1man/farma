import Main from "./components/homepage/main";
import Adv from "./components/homepage/adv";
import Offerlist from "./components/homepage/offerlist";
import Popular from "./components/homepage/popular";

export default function Home() {
  return (
    <>
      <Main />
      <Adv />
      <Offerlist />
      <Popular />
    </>
  );
}
