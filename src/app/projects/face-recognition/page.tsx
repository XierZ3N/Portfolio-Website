"use client";

export default function FaceRecognitionPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-violet-500 mb-2">
          Face Recognition System 👤
        </h1>
        <p className="text-gray-400 mb-8">
          AI-powered real-time identification and attendance tracker
        </p>

        {/* Summary */}
        <div className="p-6 rounded-xl bg-black/40 border border-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.3)] mb-12">
          <p>
            <span className="font-bold text-white">Summary:</span> A Python project that performs real-time face recognition using OpenCV and the face_recognition library.
Built a dataset capture module to collect face images via webcam.
Implemented face encoding and serialization with pickle.
Developed a real-time recognition script that detects and identifies known faces from live video.
Tech Stack: Python, OpenCV, face_recognition, NumPy
          </p>
        </div>

        {/* Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What I Did 🚀</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Build core ML model for face recognition.</li>
            <li>Setup camera integration for real-time recognition.</li>
            <li>Created attendance logging system.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            What I Learned 📚
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>How to train and test ML models for accuracy.</li>
            <li>Optimizing inference speed for real-time use.</li>
            <li>
              Building scalable apps that bridge AI + practical applications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
