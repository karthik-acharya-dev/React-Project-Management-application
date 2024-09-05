import Button from "./Button";
import NoProjectImg from "../assets/no-projects.png";
export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <main className="flex flex-col mt-24 gap-3 text-center w-2/3">
      <img
        src={NoProjectImg}
        alt="No Project Img"
        className="w-20 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold uppercase text-stone-500">
        No Project Selected
      </h2>
      <p className="text-slate-600">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </main>
  );
}
