import { pendidikan } from "@/utils/pendidikan";
import { ListPendidikan } from "../card/card-pendidikan";

export default function PendidikanList() {
  return (
    <div className="mt-8 flex flex-col space-y-4">
      <ListPendidikan pendidikan={pendidikan} />
    </div>
  );
}
