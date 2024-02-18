export default function Stats() {
    let allTimeSOLD = 0;
    let allTimeSPENT = 0;
    let allTimePROFIT = 0;
    let allTimePL = 0;

    return (
        <main className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8 w-[60vw]">
            <label className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Your Stats</label>
            <p className="text-sm md:text-[0.8em] mb-2">Your All-Time SNIPERFARM Statistics.</p>
            <div className="w-full md:ml-[100px] m-2">
                <label className="font-bold text-green-600">Total Sold {`(ALL TIME)`}</label>
                <p>{allTimeSOLD} SOL</p>
            </div>
            <div className="w-full md:ml-[100px] m-2">
                <label className="font-bold text-green-600">Total Spent {`(ALL TIME)`}</label>
                <p>{allTimeSPENT} SOL</p>
            </div>
            <div className="w-full md:ml-[100px] m-2">
                <label className="font-bold text-green-600">Total Profit {`(ALL TIME)`}</label>
                <p>{allTimePROFIT} SOL</p>
            </div>
            <div className="w-full md:ml-[100px] m-2">
                <label className="font-bold text-green-600">All Time P/L:</label>
                <p>{allTimePL} SOL</p>
            </div>
        </main>
    );
}