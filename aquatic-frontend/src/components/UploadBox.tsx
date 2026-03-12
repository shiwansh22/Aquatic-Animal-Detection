import { useState } from "react";
import { detectMedia } from "../services/api";
import ResultCard from "./ResultCard";

export default function UploadBox() {

  const [file,setFile] = useState<File | null>(null);
  const [preview,setPreview] = useState<string | null>(null);
  const [result,setResult] = useState<any>(null);
  const [loading,setLoading] = useState(false);

  const handleFile = (f:File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
    setResult(null);
  }

  const handleSubmit = async () => {
    if(!file) return;

    setLoading(true);

    const data = await detectMedia(file);

    setResult(data);
    setLoading(false);
  }

  return (

    <div className="space-y-6">

      <label className="block border-2 border-dashed border-cyan-300 rounded-xl p-10 text-center bg-white/80 cursor-pointer hover:bg-cyan-50 transition">

        <p className="text-slate-600 mb-2 font-medium">
          Click or drag file here
        </p>

        <input
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={(e)=>e.target.files && handleFile(e.target.files[0])}
        />

      </label>

      {preview && (

        <div className="rounded-xl overflow-hidden border border-cyan-200 shadow-sm">

          {file?.type.startsWith("video")
          ? <video src={preview} controls className="w-full"/>
          : <img src={preview} className="w-full"/>}

        </div>

      )}

      <button
        onClick={handleSubmit}
        disabled={!file || loading}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-teal-400/50 transition disabled:opacity-40"
      >

        {loading ? "Detecting..." : "Detect Marine Life"}

      </button>

      {loading && (

        <div className="flex justify-center">

          <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"/>

        </div>

      )}

      {result && <ResultCard detections={result.detections}/>}

    </div>

  );
}