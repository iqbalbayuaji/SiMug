const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

if (!GROQ_API_KEY) {
  console.error("VITE_GROQ_API_KEY is not set in environment variables.");
}

const SYSTEM_PROMPT = `Anda adalah SiMug AI, asisten virtual cerdas yang berdedikasi untuk membantu pengguna dalam perjalanan kesehatan dan kebugaran mereka.

Fokus utama pengetahuan dan saran Anda meliputi:
1. **Nutrisi**: Pola makan sehat, diet seimbang, kebutuhan gizi, dan resep makanan sehat.
2. **Olahraga**: Teknik olahraga yang benar, tips latihan untuk berbagai cabang olahraga, dan strategi peningkatan performa.
3. **Binaraga (Bodybuilding)**: Program latihan gym, pembentukan otot (hypertrophy), teknik angkat beban, dan pemulihan.

PANDUAN FORMAT JAWABAN:
- Gunakan **Markdown** untuk format: **bold**, *italic*, list, dan heading.
- Jika diminta membuat jadwal/tabel, WAJIB gunakan format tabel Markdown seperti ini:
  | Kolom 1 | Kolom 2 | Kolom 3 |
  |---------|---------|---------|
  | Data 1  | Data 2  | Data 3  |
- Gunakan bullet list (-) atau numbered list (1. 2. 3.) untuk poin-poin.

Panduan Interaksi PENTING:
- **JANGAN MENJAWAB ASAL-ASALAN**. Jika pertanyaan pengguna tidak jelas, acak, atau hanya mengetik sembarangan (misal: "asdf", "tes", atau kata-kata kasar/tidak bermakna), **JANGAN** mencoba mengarang jawaban.
- Sebaliknya, responlah dengan sopan: "Maaf, saya tidak mengerti maksud Anda. Sebagai SiMug AI, saya bisa membantu Anda dengan topik Nutrisi, Olahraga, dan Binaraga. Apakah ada hal spesifik dari topik tersebut yang ingin Anda tanyakan?"
- Berikan jawaban yang **akurat, ilmiah, namun mudah dipahami**.
- Gunakan nada bicara yang **ramah, suportif, dan memotivasi**.
- Jika pengguna bertanya jauh di luar topik kesehatan/kebugaran, jawab dengan sopan bahwa Anda hanya fokus pada bidang kesehatan.
- Anda adalah bagian dari platform "SiMug", jadi posisikan diri Anda sebagai mitra sukses kesehatan pengguna.`;

/**
 * Sends a message to the Groq API and returns the response.
 * @param {Array} history - Array of previous messages in the format { role: "user" | "assistant", content: "..." }
 * @param {string} newMessage - The new message from the user
 * @param {string} mode - The chat mode ('Auto', 'Santai', 'Terarah', 'Mendalam')
 * @returns {Promise<string>} - The response text from Groq
 */
export const sendMessageToGroq = async (history, newMessage, mode = 'Auto') => {
  try {
    // Define instructions for each mode
    let modeInstruction = "";
    switch (mode) {
      case 'Santai':
        modeInstruction = "(Mode: Santai. Jawablah dengan gaya bahasa gaul, santai, gunakan emoji, dan seperti teman akrab. Tetap sopan.)";
        break;
      case 'Terarah':
        modeInstruction = "(Mode: Terarah. Jawablah dengan poin-poin yang jelas, singkat, padat, langsung ke inti masalah, dan praktis. Jangan bertele-tele.)";
        break;
      case 'Mendalam':
        modeInstruction = "(Mode: Mendalam. Jawablah dengan analisis yang komprehensif, mendetail, sertakan alasan ilmiah atau latar belakang kenapa, dan berikan penjelasan panjang lebar yang edukatif.)";
        break;
      case 'Auto':
      default:
        modeInstruction = "";
        break;
    }

    const fullMessage = modeInstruction ? `${modeInstruction}\n\n${newMessage}` : newMessage;

    // Convert history format and add system prompt
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.map(msg => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text
      })),
      { role: "user", content: fullMessage }
    ];

    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: 2048,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "Maaf, tidak ada respons dari AI.";
  } catch (error) {
    console.error("Error sending message to Groq:", error);
    throw error;
  }
};
