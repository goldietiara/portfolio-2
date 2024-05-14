import WorkThumbnail from "@/components/work";
import { AllProject } from "@/constants";

const MyWork = () => {
  return (
    <main>
      <div className="absolute p-10 w-full right-0 left-0 z-10">
        <div className="flex flex-col items-center gap-40">
          {AllProject.map((v) => {
            return (
              <WorkThumbnail
                projectName={v.projectName}
                description={v.description}
                stack={v.stack}
                images={v.images}
                link={v.link}
              />
            );
          })}
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center opacity-50 md:opacity-100 z-0">
        <div className="grid grid-cols-12 w-full h-full border-sky-200 border-[0.5px]">
          {Array.from({ length: 12 * 30 }, (_, i) => (
            <div
              key={i}
              className="border-sky-200 border-[0.5px] w-full h-8 sm:h-14 md:h-16 lg:h-20"
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default MyWork;
