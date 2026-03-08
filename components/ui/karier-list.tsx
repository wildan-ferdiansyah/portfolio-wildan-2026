import { experiences } from "@/utils/karier";
import { ExperienceList } from "../card/card-karier";

export default function KarierList() {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <ExperienceList experiences={experiences} />
    </div>
  );
}
