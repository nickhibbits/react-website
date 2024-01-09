function PDFViewer() {
  return (
    <div style={{ width: "100%", height: "100dvh" }}>
      <embed
        src="/pdf/Nicholas_Hibbits_Resume_.pdf"
        type="application/pdf"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default PDFViewer;
