import UploadBox from "./components/UploadBox";
import Bubbles from "./components/Bubbles";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-cyan-100 to-teal-200 flex items-center justify-center p-6">

      <Bubbles />

      <div className="relative w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          🌊 Aquatic Animal Detection
        </h1>

        <p className="text-slate-600 mb-8">
          Upload an image or video and let the AI detect marine species.
        </p>

        <UploadBox />

      </div>

    </div>
  );
}