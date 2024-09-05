import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-amber-950 text-white w-1/3 py-16 px-8 md:w-72 rounded-r-xl">
      <h1 className="mb-10 font-bold uppercase md:text-xl">Your Projects</h1>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-4">
        {projects.map((project) => {
          let cssClass =
            "w-full rounded bg-slate-900 hover:bg-slate-700 mt-3 p-1 text-stone-500";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-500";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
