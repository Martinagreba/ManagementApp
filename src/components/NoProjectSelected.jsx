import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-3/4">
      <img src={noProjectImage} className="w-24 h-24 object-contain mx-auto" />
      <h2 className="text-2xl font-bold text-stone-500 my-6">
        No Project Selected
      </h2>
      <p className=" text-lg text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-10">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
