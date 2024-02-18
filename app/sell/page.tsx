export default function Sell() {
    let currentMarketCap = NaN;
    let initINVSTMNT = NaN;
    let totalSOL = NaN;
    let totalTOKENS = NaN;
    let currentPL  = NaN;
    let expectedSellAMNT = "0.00";

    return (
        <main className="flex flex-col gap-x-4 px-4 md:grid md:grid-cols-2 md:gap-x-20">
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Sell Tokens</h3>
                <p className="text-sm md:text-[0.8em] mb-2">Enter the percentage of tokens you want to sell.</p>
                <div className="grid grid-rows-10 gap-y-1">
                    <label className="font-semibold text-green-600">Current Market Cap:</label>
                    <p className="text-right">${currentMarketCap}</p>

                    <label className="font-semibold text-green-600">Initial Investment:</label>
                    <p className="text-right">{initINVSTMNT} SOL</p>

                    <label className="font-semibold text-green-600">Total SOL Sold:</label>
                    <p className="text-right">{totalSOL} SOL</p>

                    <label className="font-semibold text-green-600">Total Tokens Sold:</label>
                    <p className="text-right">{totalTOKENS} Tokens</p>

                    <label className="font-semibold text-green-600">Current P/L:</label>
                    <p className="text-right">+{currentPL} SOL <strong className="text-red-600">{`(+${currentPL}%)`}</strong></p>
                </div>
                <div className="flex flex-col items-center">
                    <input type="text" defaultValue={0} className="text-green-500 text-[0.9em] px-4 py-2 m-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full"></input>
                    <label className="font-semibold">Expected Sell Amount: </label>
                    <p>{expectedSellAMNT} SOL</p>
                    <button className="my-2 p-2 rounded-md bg-green-600 md:mt-2 hover:bg-green-700 w-full">Sell Tokens</button>
                    <button className="mb-4 p-2 rounded-md bg-green-600 md:mt-2 hover:bg-green-700 w-full">Dispense Tokens</button>
                </div>
                <div className="flex flex-col">
                    <label className="font-semibold">Recipient</label>
                    <input placeholder="Enter Recipient" className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full m-2"></input>
                    <button className="my-2 p-2 rounded-md bg-green-600 mt-2 md:mt-0 hover:bg-green-700">Withdraw SOL {`(Leave Gas For Sells)`}</button>
                    <button className="my-2 p-2 rounded-md bg-green-600 mt-2 md:mt-0 hover:bg-green-700">Withdraw All SOL</button>
                </div>
            </div>
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8">
                <label className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Your Tokens</label>
                <p>Here are your tokens. Click on a token to see more details.</p>
            </div>
        </main>
    );
}