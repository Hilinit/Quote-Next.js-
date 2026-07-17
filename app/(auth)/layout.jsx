export default function AuthLayout({ children }) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // İstədiyin arxa plan rəngi və ya şəkli
      padding: "20px"
    }}>
      
      {/* Giriş və Qeydiyyat formaları bu ağ qutunun daxilində mərkəzdə görünəcək */}
      <div style={{
        width: "100%",
        maxWidth: "450px",
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
      }}>
        {children}
      </div>

    </div>
  );
}