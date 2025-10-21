import { useState } from "react";
import { translateForm } from "./Translate";

function App() {
  const [h1, setH1] = useState("");
  const [lang, setLang] = useState("es");
  const [result, setResult] = useState("");

  const handleTranslate = async () => {
    if (h1 && lang !== "") {
      const translated = await translateForm(h1, lang);
      setResult(translated);
    }
  };

  const handleSpeak = () => {
    if (result) {
      const utterance = new SpeechSynthesisUtterance(result);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 p-6">
      <div className="space-y-6 w-full max-w-lg p-10 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-3xl font-bold text-center text-purple-700">
          🌍 Translator App
        </h1>

        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={h1}
          onChange={(e) => setH1(e.target.value)}
          placeholder="Enter text to translate..."
          type="text"
        />

        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
          onChange={(e) => setLang(e.target.value)}
          value={lang}
        >
          <option value="">🌐 Select Language</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese (Simplified)</option>
          <option value="hi">Hindi</option>
          {/* Add more languages as needed */}
        </select>

        <center>
          <button
            onClick={handleTranslate}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg px-6 py-3 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            🚀 Translate
          </button>

          {result && (
            <div className="mt-6 text-center w-full bg-gradient-to-r from-green-400 to-teal-500 text-white px-4 py-3 rounded-lg shadow-md">
              <h2 className="text-lg font-medium">
                ✅ Translated: <span className="font-bold">{result}</span>
                <button
                  onClick={handleSpeak}
                  className="ml-2 text-lg"
                  title="Listen"
                >
                  📢
                </button>
              </h2>
            </div>
          )}
        </center>
      </div>
    </div>
  );
}

export default App;
