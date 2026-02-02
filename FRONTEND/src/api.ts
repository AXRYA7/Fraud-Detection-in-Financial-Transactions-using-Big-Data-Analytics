export async function uploadCSV(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("❌ Backend error:", text);
    throw new Error("Backend failed");
  }

  return await response.json(); // 👈 REQUIRED
}
