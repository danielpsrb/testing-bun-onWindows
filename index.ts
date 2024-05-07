import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync("Hello I am testing Bun on the Windows!");
        return new Response(body);
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);

console.log(Bun.version);
