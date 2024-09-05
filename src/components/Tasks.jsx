import NewTask from "./NewTask";
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="font-bold text-xl text-gray-600 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="rounded-md text-stone-100 bg-stone-100 p-4 mt-8">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 ">
              <span className=" text-stone-800">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
