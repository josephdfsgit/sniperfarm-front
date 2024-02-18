export default function Liquidity() {
    let currentLiquidity = NaN;

    return (
        <main className="flex flex-col gap-x-4 px-4 md:grid md:grid-cols-2 md:gap-x-20">
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8">
                <div>
                    <h3 className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Remove Liquidity</h3>
                    <p className="text-sm md:text-[0.8em] mb-2">He bought? Dump it. Dump it to zero.</p>
                </div>
                <div className="flex flex-row">
                    <label className="text-green-500 font-semibold">Current Liquidity: </label>
                    <p id="current liquidity">&nbsp;&nbsp;{currentLiquidity} SOL</p>
                </div>
                <button id="rug-btn" className="bg-green-600 text-sm md:text-[1em] px-10 py-3 rounded-md mt-4 w-full md:w-auto hover:bg-red-700 hover:text-black hover:font-bold">Rug It</button>
            </div>
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8">
                <label className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Your Tokens</label>
                <p>Here are your tokens. Click on a token to see more details.</p>
                {/*TOKENS[]*/}
            </div>
        </main>
    );
}