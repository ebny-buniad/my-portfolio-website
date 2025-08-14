// AddProjects.jsx
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import toast from "react-hot-toast";

export default function AddProjects() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const quillRef = useRef(null);
  const quillInstance = useRef(null);

  // Initialize Quill editor
  useEffect(() => {
    if (!quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow",
        placeholder: "Write project description...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            ["link", "image", "video"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
      });

      quillInstance.current.on("text-change", () => {
        setValue("description", quillInstance.current.root.innerHTML);
      });
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    console.log("Project Data:", data);
    try {
      const res = await axios.post("http://localhost:3000/projects", data);
      console.log(res.data);

      if (res.data.data.insertedId) {
        toast.success('Project added!')
        reset();
        quillInstance.current.setContents([]); 
      }
    } catch (err) {
      console.error("Error submitting project:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6">Add New Project</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Project Image Link */}
        <div className="form-control">
          <label className="label font-semibold">Project Image Link</label>
          <input
            type="text"
            placeholder="https://example.com/image.png"
            className="input input-bordered w-full"
            {...register("image")}
          />
        </div>

        {/* Project Title */}
        <div className="form-control">
          <label className="label font-semibold">Project Title</label>
          <input
            type="text"
            placeholder="Enter project title"
            className="input input-bordered w-full"
            {...register("title")}
          />
        </div>

        {/* Project Description (Quill) */}
        <label className="label font-semibold">Project Description</label>
        <div className="bg-white text-black border rounded">
          <div ref={quillRef} />
        </div>

        {/* Live Project Link */}
        <div className="form-control">
          <label className="label font-semibold">Live Project Link</label>
          <input
            type="url"
            placeholder="https://example.com"
            className="input input-bordered w-full"
            {...register("liveLink")}
          />
        </div>

        {/* Source Code Link */}
        <div className="form-control">
          <label className="label font-semibold">Source Code Link</label>
          <input
            type="url"
            placeholder="https://github.com/username/repo"
            className="input input-bordered w-full"
            {...register("sourceLink")}
          />
        </div>

        {/* Project Start Date */}
        <div className="form-control">
          <label className="label font-semibold">Project Start Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            {...register("startDate")}
          />
        </div>

        {/* Project End Date */}
        <div className="form-control">
          <label className="label font-semibold">Project End Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            {...register("endDate")}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-full">
          Add Project
        </button>
      </form>
    </div>
  );
}
