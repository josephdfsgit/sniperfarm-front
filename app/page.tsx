export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form>
          <label htmlFor="loginkey">Please Provide Your Login Key: </label>
          <input type="text" name="loginkey"></input>
          <button>ENTER</button>
        </form>
      </div>
    </main>
  );
}
