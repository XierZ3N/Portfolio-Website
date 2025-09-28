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
            <span className="font-bold text-white">Summary:</span> A Python-based real-time Face Recognition System built using OpenCV and face_recognition library.
Developed a complete pipeline: face dataset collection → encoding → real-time recognition.
Implemented automated dataset capture via webcam for seamless user enrollment.
Built an encoding generator to store facial embeddings in a serialized format (pickle).
Designed a real-time recognition system that identifies known faces from live video feed.
Incorporated attendance logging (Name + Timestamp) into CSV files for practical use cases like classrooms or small offices.
Optimized for Mac M2 hardware, successfully running with Continuity Camera & native webcam.
Tech Stack: Python, OpenCV, dlib/face_recognition, NumPy, CSV
Future Improvements:
Incremental dataset updates without retraining.
Anti-spoofing (preventing photo/video hacks).
GUI/Web Dashboard for attendance management.
👉 This project demonstrates skills in computer vision, real-time systems, and applied machine learning, making it scalable toward real-world applications like office/classroom attendance tracking.
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
