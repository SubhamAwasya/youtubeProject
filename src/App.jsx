import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID);
  console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID);
  console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID);
  return (
    <>
      <div>OK</div>
    </>
  );
}

export default App;
