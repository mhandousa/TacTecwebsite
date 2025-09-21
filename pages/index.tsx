import { GetStaticPropsContext } from "next";
import TacTecLanding from "@/components/TacTecLanding";

export default TacTecLanding;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return { props: { messages: (await import(`../locales/${locale}/common.json`)).default } };
}
