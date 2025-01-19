import Images from "./Images";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:justify-items-center">
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
    </div>
  );
}