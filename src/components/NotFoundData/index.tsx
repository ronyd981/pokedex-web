import EmptyPokeball from "@/assets/pokeball.webp";

interface IProps {
  desc: string;
}

export default function NotFoundData({ desc }: IProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <h2 className="text-xl text-center font-bold">{desc}</h2>
      <figure className="w-44 h-44">
        <img
          src={EmptyPokeball}
          className="w-full h-full object-contain"
          alt="Pokeball vacía"
        />
      </figure>
    </div>
  );
}
