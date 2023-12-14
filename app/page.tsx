import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <div className="flex w-[600px] flex-col gap-4">
        <h1 className=" bg-accent p-2 leading-200 text-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          aliquam?
        </h1>
        <p className=" rounded-card bg-secondary-dark p-2 leading-900 text-success-dark">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          dolores laborum voluptas quae iure, autem dignissimos vitae ipsum
          possimus sequi nulla reiciendis magnam repudiandae nihil quisquam non
          magni assumenda esse.
        </p>
        <p className="bg-error p-2 text-center leading-500 text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          possimus.
        </p>
        <Button>Press Me</Button>
      </div>
    </main>
  );
}
