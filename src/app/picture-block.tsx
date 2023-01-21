import Image, { StaticImageData } from "next/image";

export default function PictureBlock({
  image,
  alt,
  title,
}: {
  image: StaticImageData;
  alt: string;
  title?: string;
}) {
  return (
    <div className="md:block h-[calc(min(max(240px,26vw),400px))] bg-orange-400 bg-cover bg-center items-center relative">
      {title && (
        <h1 className="absolute top-0 left-0 w-full h-full flex items-center justify-center leading-[1] text-[min(max(3rem,9vw),8rem)] px-8 text-white text-center">
          {title}
        </h1>
      )}
      <Image src={image} className="object-cover w-full h-full" alt={alt} />
    </div>
  );
}
