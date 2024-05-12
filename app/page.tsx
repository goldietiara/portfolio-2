export default function Home() {
  return (
    <main>
      <div className="absolute p-10 w-full right-0 left-0">
        <div className="flex justify-center">
          <h1 className=" bg-pink-500 p-10 text-3xl w-fit">henlo</h1>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-12 w-full h-full border-sky-200 border">
          {Array.from({ length: 12 * 100 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border w-full h-10 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
