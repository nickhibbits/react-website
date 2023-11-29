function PDFViewer() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <embed
        src="/pdf/Nicholas_Hibbits_Resume_01.pdf"
        type="application/pdf"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default PDFViewer;
