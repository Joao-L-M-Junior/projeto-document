import http.server
import socketserver
import webbrowser

# Define a porta em que o servidor vai rodar
PORT = 8000

# Configura o manipulador de requisições do servidor para a pasta atual
Handler = http.server.SimpleHTTPRequestHandler

print(f"Servidor iniciado em http://localhost:{PORT}")
print("Para derrubar o servidor, pressione CTRL+C no terminal.")

# Abre automaticamente o seu navegador na página do projeto
webbrowser.open(f"http://localhost:{PORT}")

# Inicializa o servidor e o mantém rodando
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado com sucesso.")
