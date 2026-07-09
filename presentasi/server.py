import argparse
import http.server
import socketserver
import webbrowser

# Mengatur argumen baris perintah (CLI)
parser = argparse.ArgumentParser(description="Jalankan static file server.")
parser.add_argument(
    "--port", 
    type=int, 
    default=8000, 
    help="Nomor port untuk server lokal (default: 8000)"
)
args = parser.parse_args()

PORT = args.port
Handler = http.server.SimpleHTTPRequestHandler

print(f"Melayani file statis di http://localhost:{PORT}")
print("Tekan Ctrl+C untuk menghentikan server.")

# Membuka browser secara otomatis
webbrowser.open(f"http://localhost:{PORT}")

# Menjalankan server
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer dihentikan.")
        httpd.server_close()
