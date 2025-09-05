export async function translateForm(text,targetLang) {
    try{
        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
        );
        const data = await response.json();
        return data.responseData.translatedText;
    }
    catch(err){
        console.log("translate error:",err);
        return "error translating text"
    }
    
}