import { useState } from "react";

export default function Undangan() {
    const [nama, setNama] = useState("");
    const [panggilan, setPanggilan] = useState("");
    const [sesi, setSesi] = useState("1");
    const [copied, setCopied] = useState(false);
    const [copiedText, setCopiedText] = useState(false);

    const defaultNama = "Tamu Undangan";
    const defaultPanggilan = "Bapak/Ibu Saudara/i";
    const defaultSesi = "1";
    const toTitleCase = (str) => {
        if (!str) return "";
      
        const exceptions = ["TPQ", "SMA", "SMP", "SD", "MI", "MTS", "MA", "PAUD", "TK"];
        return str
          .split(" ")
          .map(word => exceptions.includes(word.toUpperCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
    };

    const formattedNama = (nama || defaultNama).toLowerCase();
    const formattedPanggilan = (panggilan || defaultPanggilan).toLowerCase();
    const url = `https://walimah-ais-anang.vercel.app/?kpd=${encodeURIComponent(formattedNama)}&p=${encodeURIComponent(formattedPanggilan)}&sesi=${sesi || defaultSesi}`;

    const invitationText = `Kepada Yth. ${toTitleCase(panggilan) || defaultPanggilan} :\n${toTitleCase(nama) || defaultNama}\n\n_____________________\n\nAssalamualaikum Warahmatullahi Wabarakatuh\n\nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan anak kami.\n\nBerikut link undangan kami, untuk info lengkap dari acara, bisa kunjungi:\n\n🔗 ${url}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nWassalamualaikum Warahmatullahi Wabarakatuh\n\nHormat kami,\nDidit Sofyan Muaffif (Alm) & Chas Kunarti`;

    const copyToClipboard = (text, setCopiedState) => {
        navigator.clipboard.writeText(text);
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
    };

    const resetForm = () => {
        setNama("");
        setPanggilan("");
        setSesi("1");
    };


    return (
        <section className="bg-white fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center">
            <div className="w-96 min-h-96 shadow-2xl border rounded-3xl p-6 relative">
                <h2 className="text-xl font-bold text-center mb-4">Form Undangan</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-medium">Nama</label>
                        <input 
                            type="text" 
                            className="w-full border rounded-lg p-2" 
                            placeholder={defaultNama} 
                            value={nama} 
                            onChange={(e) => setNama(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Panggilan</label>
                        <input 
                            type="text" 
                            className="w-full border rounded-lg p-2" 
                            placeholder={defaultPanggilan} 
                            value={panggilan} 
                            onChange={(e) => setPanggilan(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Sesi</label>
                        <select 
                            className="w-full border rounded-lg p-2" 
                            value={sesi} 
                            onChange={(e) => setSesi(e.target.value)}
                        >
                            <option value="1">Sesi 1</option>
                            <option value="2">Sesi 2</option>
                        </select>
                    </div>
                </form>
                <div className="mt-4 p-3 border rounded-lg bg-gray-100 text-center break-all">
                    {url}
                </div>
                <div className="relative mt-2">
                    <button 
                        onClick={() => copyToClipboard(url, setCopied)} 
                        className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800"
                    >
                        Copy Link
                    </button>
                    {copied && <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2">Tautan telah disalin.</span>}
                </div>
                <div className="mt-4 p-3 border rounded-lg bg-gray-100 text-left text-sm whitespace-pre-wrap max-h-44 overflow-y-scroll overflow-x-clip">
                    {invitationText}
                </div>
                <div className="relative mt-2">
                    <button 
                        onClick={() => copyToClipboard(invitationText, setCopiedText)} 
                        className="w-full bg-yellow-700 text-white py-2 rounded-lg hover:bg-yellow-800"
                    >
                        Copy Undangan
                    </button>
                    {copiedText && <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-1 px-2">Undangan telah disalin.</span>}
                </div>
                <button 
                    onClick={resetForm} 
                    className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-800 mt-2"
                >
                    Reset
                </button>
            </div>
        </section>
    );
}