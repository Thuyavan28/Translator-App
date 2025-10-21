import { useState } from "react";
import { translateForm } from "./Translate";

function App() {
  const [h1, setH1] = useState("");
  const [lang, setLang] = useState("es");
  const [result, setResult] = useState("");

  const handleTranslate = async () => {
    if (h1 && lang !== "Select Language") {
      const translated = await translateForm(h1, lang);
      setResult(translated);
    }
  };

  return (
    <>
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
          >
            <option value="">🌐 Select Language</option>

            <option value="af">Afrikaans</option>
            <option value="sq">Albanian</option>
            <option value="am">Amharic</option>
            <option value="ar">Arabic</option>
            <option value="hy">Armenian</option>
            <option value="az">Azerbaijani</option>
            <option value="eu">Basque</option>
            <option value="be">Belarusian</option>
            <option value="bn">Bengali</option>
            <option value="bs">Bosnian</option>
            <option value="bg">Bulgarian</option>
            <option value="ca">Catalan</option>
            <option value="ceb">Cebuano</option>
            <option value="zh">Chinese (Simplified)</option>
            <option value="zh-TW">Chinese (Traditional)</option>
            <option value="hr">Croatian</option>
            <option value="cs">Czech</option>
            <option value="da">Danish</option>
            <option value="nl">Dutch</option>
            <option value="en">English</option>
            <option value="eo">Esperanto</option>
            <option value="et">Estonian</option>
            <option value="fi">Finnish</option>
            <option value="fr">French</option>
            <option value="gl">Galician</option>
            <option value="ka">Georgian</option>
            <option value="de">German</option>
            <option value="el">Greek</option>
            <option value="gu">Gujarati</option>
            <option value="ht">Haitian Creole</option>
            <option value="ha">Hausa</option>
            <option value="he">Hebrew</option>
            <option value="hi">Hindi</option>
            <option value="hu">Hungarian</option>
            <option value="is">Icelandic</option>
            <option value="id">Indonesian</option>
            <option value="ga">Irish</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="jv">Javanese</option>
            <option value="kn">Kannada</option>
            <option value="kk">Kazakh</option>
            <option value="km">Khmer</option>
            <option value="ko">Korean</option>
            <option value="ku">Kurdish</option>
            <option value="ky">Kyrgyz</option>
            <option value="lo">Lao</option>
            <option value="la">Latin</option>
            <option value="lv">Latvian</option>
            <option value="lt">Lithuanian</option>
            <option value="lb">Luxembourgish</option>
            <option value="mk">Macedonian</option>
            <option value="mg">Malagasy</option>
            <option value="ms">Malay</option>
            <option value="ml">Malayalam</option>
            <option value="mt">Maltese</option>
            <option value="mi">Maori</option>
            <option value="mr">Marathi</option>
            <option value="mn">Mongolian</option>
            <option value="my">Myanmar (Burmese)</option>
            <option value="ne">Nepali</option>
            <option value="no">Norwegian</option>
            <option value="fa">Persian</option>
            <option value="pl">Polish</option>
            <option value="pt">Portuguese</option>
            <option value="pa">Punjabi</option>
            <option value="ro">Romanian</option>
            <option value="ru">Russian</option>
            <option value="sm">Samoan</option>
            <option value="gd">Scottish Gaelic</option>
            <option value="sr">Serbian</option>
            <option value="st">Sesotho</option>
            <option value="sn">Shona</option>
            <option value="sd">Sindhi</option>
            <option value="si">Sinhala</option>
            <option value="sk">Slovak</option>
            <option value="sl">Slovenian</option>
            <option value="so">Somali</option>
            <option value="es">Spanish</option>
            <option value="su">Sundanese</option>
            <option value="sw">Swahili</option>
            <option value="sv">Swedish</option>
            <option value="tl">Tagalog</option>
            <option value="tg">Tajik</option>
            <option value="ta">Tamil</option>
            <option value="te">Telugu</option>
            <option value="th">Thai</option>
            <option value="tr">Turkish</option>
            <option value="uk">Ukrainian</option>
            <option value="ur">Urdu</option>
            <option value="uz">Uzbek</option>
            <option value="vi">Vietnamese</option>
            <option value="cy">Welsh</option>
            <option value="xh">Xhosa</option>
            <option value="yi">Yiddish</option>
            <option value="yo">Yoruba</option>
            <option value="zu">Zulu</option>
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
       
                </h2>
              </div>
            )}
          </center>
        </div>
      </div>
    </>
  );
}

export default App;
