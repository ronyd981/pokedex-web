import Pikachu from "@/assets/pikachu-sad.webp";

export default function ErrorComponent() {
  return (
    <div className="flex justify-center items-center flex-col gap-8">
      <h2 className="text-xl text-center font-bold text-red-500">
        Ha ocurrido un error
      </h2>
      <figure className="w-52 h-52">
        <img
          src={Pikachu}
          className="w-full h-full object-cover"
          alt="Pikachu triste"
        />
      </figure>
    </div>
  );
}
