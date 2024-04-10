import { Button } from "flowbite-react";
import CardPost from "../components/CardPost";

export default function Home() {
  return (
    <section>
      <div className="flex-col sm:m-auto md:m-auto 2xl:m-auto  w-3/5 ">
        <div className="ml-12">
          <h1 className="text-4xl mt-10 ">Lorem Impsum Lorem impsum</h1>
          <p className="mt-3">lorem impsum lorem impsum lorem impsum</p>
        </div>

        <div className="w-4/5 mt-10 ml-12 ">
          <Button className="w-28 bg-primary" size="xs">
            Ver mais
          </Button>
        </div>
      </div>

      <div className="max-w-6xl  mx-auto p-3 flex  flex-col gap-8 py-7">
        <div className="flex justify-center gap-4">
          <CardPost />
        </div>
      </div>
      <a className="flex justify-center mt-10 text-primary cursor-pointer">
        Veja todos os artigos
      </a>
    </section>
  );
}
