export default function Launch() {
    let wallet = "949397825768bdnabhd983b";
    let buyerPrivateKeyBalance = 0;
    let deployerPrivateKeyBalance = 0;
    let predictedTokenMRKTCap = NaN;
    let predictedSupplyAMNT = NaN;

    return (
        <main className="flex flex-col gap-x-4 px-4 md:grid md:grid-cols-2 md:gap-x-20">
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8">
                <h3 className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Deploy</h3>
                <p className="text-sm md:text-[0.8em] mb-2">Create a liquidity pool and set buy amounts for your token.</p>
                <form className="w-full flex flex-col items-center">
                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <label className="font-semibold">Buyer Private Key</label>
                        <label className="text-[0.9em]" id="private-key-balance">Balance: {buyerPrivateKeyBalance}</label>
                    </div>
                    <div className="flex flex-col md:flex-row my-2 items-center">
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="Enter Your Private Key"></input>
                        <button className="mx-2 p-2 rounded-md bg-green-600 mt-2 md:mt-0 hover:bg-green-700">Gen</button>
                        <button className="mx-2 p-2 rounded-md bg-green-600 mt-2 md:mt-0 hover:bg-green-700">Copy</button>
                    </div>
                    <label htmlFor="airdrop-wallets">Generate And Airdrop Wallets?</label>
                    <input name="airdrop-wallets" type="checkbox" className="accent-red-600"></input>
                    <div className="flex flex-col my-2">
                        <label className="font-semibold"># Of Wallets</label>
                        <input type="text" className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" defaultValue={50}></input>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <label className="font-semibold">Deployer Private Key</label>
                        <label className="text-[0.9em]" id="private-key-balance">Balance: {deployerPrivateKeyBalance}</label>    
                    </div>
                    <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded my-2 w-full" placeholder="Enter Deployer Private Key"></input>
                    <div className="flex flex-col items-center my-2 w-full">
                        <label className="font-semibold my-1">Token Info</label>
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="Enter Token Mint Address"></input>
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="Enter Market ID"></input>
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="Enter Ticker"></input>
                    </div>
                    <div className="flex flex-col items-center my-2 w-full">
                        <label className="font-semibold mb-1">{`Buy Amount (SOL)`}</label>
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="First"></input>
                    </div>
                    <div className="flex flex-col items-center my-2 w-full">
                        <label className="font-semibold mb-1">{`Liquidity Amount (SOL)`}</label>
                        <input className="text-green-500 text-[0.9em] p-2 bg-[#0d0e0e] placeholder:text-green-800 rounded w-full" placeholder="Enter Liquidity Amount"></input>
                    </div>
                    <button className="bg-green-600 text-sm md:text-[0.8em] px-10 py-3 rounded-md mt-4 w-full md:w-auto hover:bg-red-700 hover:text-black hover:font-bold">Initiate Deployment Sequence</button>
                </form>
            </div>
            <div className="flex flex-col items-center bg-black border border-green-600 rounded-lg p-6 mt-8 w-full md:w-[24vw]">
                <h3 className="font-bold text-xl md:text-[2.2em] mt-[-10px] mb-2">Predicted Parameters</h3>
                <p className="text-sm md:text-[0.8em] mb-2">Here Are The Predicted Parameters Based On Your Input</p>
                <div className="flex flex-col md:flex-row my-2">
                    <label className="text-green-500 font-semibold">Predicted Market Cap: </label>
                    <label id="predicted-market-cap">&nbsp;$ {predictedTokenMRKTCap}</label>
                </div>
                <div className="flex flex-col md:flex-row my-2">
                    <label className="text-green-500 font-semibold">Predicted Supply Amount: </label>
                    <label id="predicted-supply-amount">&nbsp;{predictedSupplyAMNT}%</label>
                </div>
                <div className="flex flex-col md:flex-row my-2">
                    <label className="text-green-500 font-semibold">Wallet: </label>
                    &nbsp;&nbsp;
                    <label id="wallet">{wallet}</label>
                </div>
                <div className="flex flex-col my-2">
                    <label className="text-green-500 font-semibold">Token Mint Address: </label>
                    <label className="text-green-500 font-semibold">Market ID:</label>
                    <label className="text-green-500 font-semibold">Buy Amount:</label>
                    <label className="text-green-500 font-semibold">Liquidity Amount:</label>
                </div>
            </div>
        </main>
    );
}
